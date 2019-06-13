var songs = ['Raining Blood - Slayer', 
'Both of us cannot be wrong - Leonard Cohen', 
'Vitamin C - Can'];
console.log(songs[2]);
songs[0] = 'Eleanor Rigby - The Beatles'
console.log(songs.length);
songs.push('Jamming - Bob Marley');
console.log(songs)
songs.pop(songs)
console.log(songs)

var favweb = ['Netflix', 'Youtube', 'Wikipedia']
favweb.push('IMDB')
favweb.push('Amazon')
console.log(favweb)
favweb.pop()
console.log(favweb)

favweb.shift()
console.log(favweb)

favweb.unshift('Netflix')
console.log(favweb)

var tv_film=favweb.slice(1)
console.log(favweb)
console.log(tv_film)

favweb.splice(2)
console.log(favweb)