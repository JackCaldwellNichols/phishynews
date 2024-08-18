import { useEffect, useState } from "react";
import axios from "axios";
import StoryCard from "../../components/StoryCard/StoryCard";
import "./home.scss";
import data from "../../data.json";

const Home = () => {
  const [stories, setStories] = useState([]);

  {
    /*  const url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await axios.get(url);
        setStories(res.data.articles);
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchStories();
  }, []);*/
  }

  return (
    <div className="home">
      <div className="wrapper">
        {data.map((story, idx) => (
          <StoryCard story={story} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Home;
