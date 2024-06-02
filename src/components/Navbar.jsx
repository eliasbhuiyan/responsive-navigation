import { useEffect, useState } from "react";
import "../index.css";
const Navbar = ({ children, style }) => {
  const handelBar = () => {
    document.querySelector(".main_menu").style.display = "block";
  };
  const [scrolingY, setScrollY] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 200) {
  //       setScrollY(true);
  //     } else {
  //       setScrollY(false);
  //     }
  //   });
  // }, [scrolingY]);
  return (
    <>
      <nav
        style={style}
        className={`navbarMain ${scrolingY ? "fixedMenu-true" : ""}`}
      >
        <button onClick={handelBar} className="menuBar">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
          </svg>
        </button>
        <div className="container">
          <div className="mainMenu_wraper">{children}</div>
        </div>
      </nav>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellat
        magni tenetur aut, perferendis similique cum nulla accusantium, ea ex,
        reprehenderit nesciunt minus tempora dolorem recusandae ipsum. Sapiente,
        ullam atque. Nisi numquam similique nihil magni dolores, esse, sunt
        ullam delectus tempora placeat quos aperiam dolor officia? Placeat
        mollitia aliquid impedit suscipit, possimus iure. Laborum reprehenderit
        aspernatur minus eius dolores nihil voluptatem dolorum commodi quidem
        veritatis unde, a eaque voluptatibus, ab quisquam nisi, iure impedit.
        Corrupti harum placeat voluptatum odit similique? Ducimus at
        voluptatibus perferendis! Inventore cumque dolor illum id veniam
        corporis repellat blanditiis! Doloremque inventore ab recusandae minima
        alias eum atque dicta corporis excepturi, ducimus totam, perferendis hic
        architecto, quas repudiandae. Quo laudantium distinctio fugit voluptatum
        saepe aut praesentium, necessitatibus commodi fugiat eligendi obcaecati
        eius! At, quod unde? Hic voluptates aut, mollitia optio ducimus cumque
        perspiciatis. Dolor libero nihil reiciendis voluptate accusamus aut
        quibusdam iusto, ipsum voluptas, ab eligendi obcaecati tempora
        exercitationem excepturi, nemo consequuntur veritatis. Rem quia qui
        itaque tenetur dolores consectetur dignissimos eaque placeat cum?
        Commodi ea, iure unde velit debitis quam quis nesciunt aliquid deserunt
        dolores officiis, a quos recusandae qui voluptas beatae possimus ut
        assumenda! A accusantium excepturi enim provident et quasi, aliquid
        inventore voluptatum architecto repellat quibusdam commodi ad
        temporibus, reprehenderit animi culpa aut ipsum dolorum corrupti omnis
        ipsam eligendi expedita non? A quis, iste expedita veritatis explicabo
        ut nostrum aut quisquam ducimus sapiente, veniam doloremque eius
        pariatur tempora, quidem saepe dolores quos. Vero voluptas iure aperiam
        modi rem eos itaque, optio hic voluptatem dolores ex harum suscipit
        temporibus excepturi quod neque dignissimos esse accusamus illum quas
        voluptatibus laboriosam a! Quidem explicabo quaerat sint, enim culpa
        quis obcaecati eveniet accusamus fugiat nisi possimus voluptatibus cum
        totam velit quod tenetur sit excepturi esse odio nesciunt rerum ipsam
        voluptatum aliquam odit. Itaque corrupti velit impedit exercitationem
        tenetur quibusdam vel voluptate debitis autem corporis nostrum aliquid,
        temporibus minus doloremque dolore quidem, accusantium praesentium. Eum
        magnam, in magni error necessitatibus obcaecati culpa harum commodi
        tempora, amet architecto mollitia accusantium asperiores ipsam eius
        deserunt voluptatibus dolorum omnis odit unde esse. Quia veniam,
        dignissimos sunt delectus possimus sit at. Beatae deleniti, quas
        laudantium quibusdam ratione animi ducimus repellendus quia ex provident
        ipsam cum quo, vitae saepe! Deserunt mollitia laudantium modi libero
        voluptatibus sequi quidem natus cupiditate blanditiis consequatur rem
        veniam quibusdam animi eum unde accusantium quaerat quam, numquam
        praesentium dolorum! Aut cum quisquam cupiditate alias reprehenderit
        nulla molestias expedita consectetur labore, debitis voluptatibus.
        Doloremque dolorum corporis porro quae odit. Magni reprehenderit, harum
        aperiam, voluptates, minus sed voluptas eaque omnis quis deleniti nihil
        sint molestias. Libero itaque natus dolorum quod odio voluptatum
        exercitationem delectus inventore deleniti cum omnis sunt soluta velit,
        aut ipsam nemo, cupiditate assumenda architecto minima cumque eaque?
        Totam voluptate aliquid distinctio amet ipsa libero corrupti nobis,
        eligendi ipsam magni esse facilis id perferendis nemo cum impedit unde
        quas cumque provident vel temporibus perspiciatis atque reiciendis
        doloribus. Quod iusto repudiandae, non maiores repellat assumenda
        voluptatibus, facere quasi accusamus cupiditate distinctio laudantium
        nam consectetur earum itaque quaerat tempora at animi beatae.
      </p>
    </>
  );
};

export default Navbar;
