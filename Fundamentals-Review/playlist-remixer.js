const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(arrayOfPlaylists) {
  if (!Array.isArray(arrayOfPlaylists)) { return [] }

  const newPlaylist = [];

  for (let playlist of arrayOfPlaylists) {
    for (let track of playlist) {
      const newTrack = {};
      newTrack.trackId = track.trackId;
      newTrack.artist = track.artist;
      newTrack.title = track.title;
      newTrack.votes = track.votes;
      newTrack.bpm = track.bpm;

      newTrack.source = [arrayOfPlaylists.indexOf(playlist), playlist.indexOf(track)];
      newPlaylist.push(newTrack);
    }
  }
  return newPlaylist;
}

function scoreTracks(arrayOfTracks) {
  const tracks = [...arrayOfTracks];
  for (let track of tracks) {
    const score = track.votes * 10 - Math.abs(track.bpm - 120);
    track.score = score;
  }
  return tracks;
}

function dedupeTracks(arrayOfTracks) {
  const newPlaylist = [];

  const knownIds = [];
  for (let track of arrayOfTracks) {
    if (!knownIds.includes(track.trackId)) {
      newPlaylist.push(track);;
      knownIds.push(track.trackId);
    }
  }
  return newPlaylist;
}

function enforceArtistQuota(arrayOfTracks, maxOcc) {
  const newPlaylist = [];
  const artists = [];

  for (let track of arrayOfTracks) {
    const count = artists.filter(x => x === track.artist).length;

    if (count < maxOcc) {
      artists.push(track.artist);
      newPlaylist.push(track);
    } 
  }
  return newPlaylist;
}

function buildSchedule(arrayOfTracks) {
  const tracks = [];

  let slotNum = 1;
  for (let track of arrayOfTracks) {
    tracks.push({ slot: slotNum, trackId: track.trackId });

    slotNum++;
  }
  return tracks;
}

function remixPlaylist(arrayOfPlaylists, maxOcc) {
  const flattened = flattenPlaylists(arrayOfPlaylists);
  const scoredPlaylist = scoreTracks(flattened);
  const dedupedPlaylist = dedupeTracks(scoredPlaylist);
  const artistQuotaPlaylist = enforceArtistQuota(dedupedPlaylist, maxOcc);
  console.log(artistQuotaPlaylist);
  const scheduledPlaylist = buildSchedule(artistQuotaPlaylist);

  return scheduledPlaylist;
}

remixPlaylist(playlists, 1);
