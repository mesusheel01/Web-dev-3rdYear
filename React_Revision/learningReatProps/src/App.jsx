import Card from "./assets/components/contactCard"

function App() {
  
  return (
    <>
    <div className="app">
    <h1 >My Contacts</h1>
      <Card 
        name="Zoro"
        src="https://imgs.search.brave.com/-MWQvuAwRgldXI-y7FvBCD1Xcg385mBJu0NsR9IhSJ4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvem9yby1waWN0/dXJlcy04bnYwYzBu/YjdyaWpmNnoyLmpw/Zw"
        phone="88889999999"
        email="zoroFindTheWay@newWay.com"
      />          
      <Card 
        name="Sukuna"
        src="https://imgs.search.brave.com/Pq_RtX_zk_GwXDK-bVRJqk4kQ5gMiIWneTHaO8w94zc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMTAv/c3VrdW5hLXRydWUt/Zm9ybS5qcGc"
        phone="................."
        email="darkEvil@hell.com"
      />          
      <Card 
        name="Gojo"
        src="https://imgs.search.brave.com/cBe8dQJ2PXIZWmQUf5D_XK1Q7JtpOveuia_MrLnwY54/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDQv/Z29qby12b2x1bWUt/MjYtcmV0dXJuLTEu/anBn"
        phone="21424213111"
        email="gojoSensei@newEra.com"
      />          
    </div>
    </>
  )
}

export default App
