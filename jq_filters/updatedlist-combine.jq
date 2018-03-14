[.[][]] | sort_by(.releaseDate) | reverse | .[0:50] | [.[] as $chapter | {chapter: ($chapter | del(.mangaId)), manga: ($mangalist[][] | select(.id == $chapter.mangaId))}]
