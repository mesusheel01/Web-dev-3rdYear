import React from 'react'
import List from './assets/components/list'

const date = new Date();
console.log(date);
const name = "Susheel "
const App = ()=>{
    return(
        <div>        
        <div>
        <p>Created by {name}</p>
        <p>Copyright {date}</p>
        <List />
        <img src="https://imgs.search.brave.com/d607iX-52tUbkvo7oq-mccexZRkIKO14HZmh8ws5Qa4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU3/ODc5YTZjYmViYWZi/ODc5ZjI1NjczNS8x/NTc5NzIxNDc2NTM2/LVYwWlhaREFKN1Ax/SDkzOU41RkdGL2hl/YWRlcjIuanBn"></img>
        <img src="https://imgs.search.brave.com/lQKoX9t2GSzefFwT_7eObBRFBZunHgtYtTXmItjTrms/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzQxNzIzNjgzNTgt/NDg5OGE4MDEzM2M3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tkh4OFpt/OXZaQ1V5TUdsdFlX/ZGxmR1Z1ZkRCOGZE/QjhmSHd3.jpeg"></img>
        <img src="https://imgs.search.brave.com/v51Kh3MSD2cPTBir-PWOtvkllKHAuPm-d3Lf5L7vBY4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3L2Mx/LzEyLzg3YzExMmJi/YTBiOWQ0NTVhNzgx/MmQ2NDBhZjY3NTA2/LmpwZw"></img>
</div>
</div>

)};

export default App;