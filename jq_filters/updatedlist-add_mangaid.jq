[.[] | (. + {releaseDate: .releaseDate | strptime("%Y-%m-%d %H:%M:%S %Z")|mktime, mangaId: input_filename | .[-41:-5]})] | sort_by(.releaseDate) | reverse
