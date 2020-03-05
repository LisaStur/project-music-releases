import React from 'react';
import data from './data.json';
import { Album } from './Components/Album';

console.log(data)

export const App = () => {
  return (
    <div>
      {data.albums.items.map(song => {
        return <Album key={song.id} albumTitle={song.name} />
      })}
      Find me in src/app.js!
    </div>
  )
}
