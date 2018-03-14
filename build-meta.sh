#!/usr/bin/env bash
die () {
    echo >&2 "$@"
    exit 1
}

[ "$#" -eq 1 ] || die "1 argument required, $# provided. Usage: ./build-meta.sh path/to/assets/"
if ! ls ${1}/meta/m-* 1>/dev/null 2>&1;
then
  die "Could not find any meta files at $1/meta/"
fi

# Build the full manga list
cat ${1}/meta/m-* | \
jq --slurp -f jq_filters/mangalist.jq > "$1/mangalist.json"

# Build the list of updated chapters
jq -f jq_filters/updatedlist-add_mangaid.jq ${1}/meta/c-* | \
jq --slurpfile mangalist "$1/mangalist.json" --slurp -f jq_filters/updatedlist-combine.jq \
> "$1/updatedlist.json"
