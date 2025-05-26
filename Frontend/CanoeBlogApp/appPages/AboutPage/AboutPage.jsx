import style from "./AboutPage.module.css";

export default function AboutPage(){
  return (
    <div className={style.mainContainer}>
      <h1 className={style.title}>Welcome to Canoe</h1>
      <div className={style.summaryContainer}>
        <p>
          If this is your first time here—welcome. Canoe is a place where people
          from all walks of life come to share their personal journeys, spark
          ideas, and connect through authentic experiences. Whether you’re here
          to tell your story or learn from others’, Canoe is designed to help
          you feel at home as you explore, express, and grow within a supportive
          community.
        </p>
      </div>

      <div className={style.imgContainer}>
        <img
          src='https://images.unsplash.com/photo-1602749035334-54ebc4010e0c?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
      </div>

      <div>
        <h3 className={style.subTitle}>Inspiration Behind Canoe</h3>
      </div>
      <div className={style.summaryContainer}>
        <p>
          Canoe was born from the idea of creating a vessel—small but
          strong—that carries stories, experiences, and connections across the
          vast and sometimes overwhelming digital world. Much like a canoe
          gliding gently over water, navigating currents and discovering new
          shores, this platform is designed to help individuals navigate their
          personal journeys with ease and confidence. As someone of Polynesian
          lineage—Samoan specifically—Canoe is deeply inspired by the incredible
          voyages of my ancestors. They journeyed across the vast Pacific Ocean
          in traditional canoes, called the va'a in Samoa. These brave voyagers
          took a leap of faith, leaving behind their families and familiar lives
          to discover new islands and opportunities. This spirit of exploration
          and courage is at the heart of Canoe. It’s about the journey, the
          lessons learned along the way, and the stories that shape us. Canoe
          invites you to embark on your own voyage, sharing your experiences and
          growing within a community that values every path.
        </p>
      </div>

      <div>
        <img src='' alt='' />
      </div>
      <div>
        <h3 className={style.subTitle}>Step into Canoe</h3>
      </div>
      <div className={style.summaryContainer}>
        <p>
          Thank you for stopping by Canoe. We truly appreciate your time and
          interest in what we’re building together. Here, your story isn’t just
          welcome — it’s valued. This community thrives on sharing real
          experiences, supporting one another, and growing side by side. Whether
          you’re ready to share your journey or simply curious to learn from
          others, Canoe is your safe harbor. We’d love for you to join us. Come
          aboard, share your voice, and help shape a space where everyone
          belongs.
        </p>
      </div>
    </div>
  );
}

