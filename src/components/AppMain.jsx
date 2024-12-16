import AppCard from "./AppCard";
import arrayPost from "../data/arrayPost";
// import style from "./AppMain.module.css";

const AppMain = () => {


    const printPosts = () => {
        return arrayPost.map((curPost) => (
            <div className="col" key={curPost.id}>
            <AppCard 
            title={curPost.title}
            image={curPost.image}
            content={curPost.content}
            tags={curPost.tags}
            published={curPost.published}
            /> 
            </div>
        ))
    }

    

    return (
        <main className="container">
            <div className="container">
            {printPosts()}
            </div>
        </main>
    )
}

export default AppMain;