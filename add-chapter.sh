#!/usr/bin/env bash
die () {
    echo >&2 "$@"
    exit 1
}

[ "$#" -eq 5 ] || die "5 arguments required, $# provided. Usage: ./add-chapter.sh path/to/meta/ manga-id path/to/pages/ page/url/prefix \"Chapter label\""

manga_path=${1}m-${2}.json
if [ ! -f ${manga_path} ];
then
  die "Could not find manga meta data at ${manga_path}"
fi

if ! ls "${3}"* 1>/dev/null 2>&1;
then
  die "Could not find any files at $3"
fi

chapters_path=${1}c-${2}.json
if [ ! -f ${chapters_path} ];
then
  echo -n "[]" > ${chapters_path}
fi

chapter_uuid=$(uuidgen)

release_date=$(date -u +"%Y-%m-%d %H:%M:%S %Z")

pages_path=${1}p-${chapter_uuid}.json

jq ". + [{id: \"${chapter_uuid}\", label: \"${5}\", releaseDate: \"${release_date}\"}]" ${chapters_path} > ${chapters_path}.2

mv ${chapters_path}.2 ${chapters_path}

ls "${3}"* -1 | xargs -I{} -d '\n' basename {} | \
jq --raw-input . | jq --slurp "[{imageUrl: (\"${4}\" + .[])}]" > ${pages_path}
