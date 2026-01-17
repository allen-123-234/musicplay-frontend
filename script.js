const songList = document.getElementById("song-list")

fetch("http://localhost:3000/api/songs")
  .then(res => res.json())
  .then(songs => {
    songs.forEach(song => {
      const li = document.createElement("li")
      li.textContent = `${song.title} - ${song.artist}`
      songList.appendChild(li)
    })
  })
  .catch(err => {
    console.error("抓不到 API:", err)
    songList.textContent = "抓不到歌曲資料"
  })
