[.[] | {id: .id, name: .name, imageUrl: .imageUrl, author: .author, artist: .artist, description: (.description[0:64]+"...")}] | sort_by(.name)
