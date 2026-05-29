import React from 'react'
import Card from './components/Card';


const App = () => {
  const jobs = [
  {
    id: 1,
    company: "Amazon",
    image: "https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651108.jpg",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    company: "Google",
    image: "https://cdn-icons-png.flaticon.com/128/281/281764.png",
    posted: "2 days ago",
    role: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$150/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    company: "Microsoft",
    image: "https://www.logodesignlove.com/wp-content/uploads/2012/08/microsoft-logo-02.jpeg",
    posted: "1 week ago",
    role: "React Developer",
    type: "Remote",
    level: "Senior Level",
    salary: "$180/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    company: "Netflix",
    image: "https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940",
    posted: "3 days ago",
    role: "Backend Developer",
    type: "Full Time",
    level: "Junior Level",
    salary: "$110/hr",
    location: "Delhi, India",
  },
  {
    id: 5,
    company: "Adobe",
    image: "https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.jpg?width=1200&format=pjpg&optimize=medium",
    posted: "6 days ago",
    role: "Graphic Designer",
    type: "Part Time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Pune, India",
  },
  {
    id: 6,
    company: "Meta",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxKYJk-lyQEXHHCZBWsN20X_iWvzzaYMQbw&s",
    posted: "4 days ago",
    role: "MERN Stack Developer",
    type: "Remote",
    level: "Senior Level",
    salary: "$200/hr",
    location: "Noida, India",
  },
  {
    id: 7,
    company: "Spotify",
    image: "https://download.logo.wine/logo/Spotify/Spotify-Logo.wine.png",
    posted: "1 day ago",
    role: "UI Designer",
    type: "Full Time",
    level: "Junior Level",
    salary: "$95/hr",
    location: "Chennai, India",
  },
  {
    id: 8,
    company: "Tesla",
    image: "https://fabrikbrands.com/wp-content/uploads/Tesla-Logo-1-1155x770.png",
    posted: "2 weeks ago",
    role: "Software Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$250/hr",
    location: "Ahmedabad, India",
  },
  {
    id: 9,
    company: "Apple",
    image: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    posted: "8 days ago",
    role: "iOS Developer",
    type: "Remote",
    level: "Mid Level",
    salary: "$170/hr",
    location: "Kolkata, India",
  },
  {
    id: 10,
    company: "Flipkart",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHndUsRI-xNTw/feedshare-shrink_800/feedshare-shrink_800/0/1733728700313?e=2147483647&v=beta&t=Mdzx1f5esSaJS4pqKrI2P51B1921hgdVDItVdMVqr_U",
    posted: "7 days ago",
    role: "Full Stack Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$140/hr",
    location: "Patna, India",
  },
];

  return (
    <div className='parent'>
      {jobs.map(function(elem,idx){
        return <div key={idx}>
          <Card image={elem.image} comp={elem.company} post={elem.role} type={elem.type} level={elem.level} posted={elem.posted} salary={elem.salary} location={elem.location} />
        </div>
        
        
      })}
      
    </div>
  )
}

export default App