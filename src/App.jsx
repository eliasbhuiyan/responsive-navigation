import BrowsItem from "./components/BrowsItem";
import Contact from "./components/Contact";
import DropDown from "./components/DropDown";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import MegaMenu from "./components/MegaMenu";
import MenuBar from "./components/MenuBar";
import NavItem from "./components/NavItem";
import NavbarBrand from "./components/NavbarBrand";
import SearchBar from "./components/SearchBar";
import SideItems from "./components/SideItems";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <MegaMenu
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #dee2e6",
          padding: "20px 0",
        }}
      >
        <Header>
          <NavbarBrand>
            <a href="/" style={{ fontSize: "30px", fontWeight: "700" }}>
              LOGO
            </a>
          </NavbarBrand>
          <SearchBar>
            <input
              type="text"
              placeholder="Search Product"
              style={{
                width: "100%",
                padding: "12px 10px",
                borderRadius: "10px",
              }}
            />
          </SearchBar>
          <SideItems>
            <a href="/">
              <span className="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                </svg>
                <span
                  className="badge"
                  style={{ backgroundColor: "#0d6efd", color: "#fff" }}
                >
                  2
                </span>
              </span>
              <span className="icon_base">Wishlist</span>
            </a>
          </SideItems>
          <SideItems>
            <a href="/">
              <span className="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="176"
                    cy="416"
                    r="16"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  ></circle>
                  <circle
                    cx="400"
                    cy="416"
                    r="16"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  ></circle>
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M48 80h64l48 272h256"
                  ></path>
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
                  ></path>
                </svg>
                <span
                  className="badge"
                  style={{ backgroundColor: "#0d6efd", color: "#fff" }}
                >
                  2
                </span>
              </span>
              <span className="icon_base">Cart</span>
            </a>
          </SideItems>
        </Header>
        <MainMenu
          style={{
            padding: "20px 0",
          }}
        >
          <Sidebar
            title="Browse All Categories"
            style={{ backgroundColor: "#0d6efd", color: "white" }}
          >
            <BrowsItem>
              <a>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M314.56 48s-22.78 8-58.56 8-58.56-8-58.56-8a31.94 31.94 0 0 0-10.57 1.8L32 104l16.63 88 48.88 5.52a24 24 0 0 1 21.29 24.58L112 464h288l-6.8-241.9a24 24 0 0 1 21.29-24.58l48.88-5.52L480 104 325.13 49.8a31.94 31.94 0 0 0-10.57-1.8zm18.75 4.66a80 80 0 0 1-154.62 0"
                  ></path>
                </svg>
                <span>Mens Fashion</span>
              </a>
            </BrowsItem>
            <BrowsItem>
              <a>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M314.56 48s-22.78 8-58.56 8-58.56-8-58.56-8a31.94 31.94 0 0 0-10.57 1.8L32 104l16.63 88 48.88 5.52a24 24 0 0 1 21.29 24.58L112 464h288l-6.8-241.9a24 24 0 0 1 21.29-24.58l48.88-5.52L480 104 325.13 49.8a31.94 31.94 0 0 0-10.57-1.8zm18.75 4.66a80 80 0 0 1-154.62 0"
                  ></path>
                </svg>
                <span>Womens Fashion</span>
              </a>
            </BrowsItem>
          </Sidebar>
          <MenuBar>
            <NavItem>
              <a href="/">Home</a>
            </NavItem>
            <NavItem>
              <a href="/">About</a>
            </NavItem>
            <DropDown
              label="Services"
              style={{ width: "200px", backgroundColor: "white" }}
            >
              <NavItem>
                <a href="/">Service 1</a>
              </NavItem>
              <NavItem>
                <a href="/">Service 2</a>
              </NavItem>
              <NavItem>
                <a href="/">Service 3</a>
              </NavItem>
              <DropDown
                label="Service 4"
                style={{ width: "100px", backgroundColor: "white" }}
              >
                <NavItem>
                  <a href="/">Service 1</a>
                </NavItem>
                <NavItem>
                  <a href="/">Service 2</a>
                </NavItem>
                <NavItem>
                  <a href="/">Service 3</a>
                </NavItem>
              </DropDown>
            </DropDown>
            <NavItem>
              <a href="/">Blog</a>
            </NavItem>
            <NavItem>
              <a href="/">Blog</a>
            </NavItem>
            <NavItem>
              <a href="/">Blog</a>
            </NavItem>
            <NavItem>
              <a href="/">Blog</a>
            </NavItem>
          </MenuBar>
          <Contact>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374z"
                ></path>
              </svg>
              <p style={{ display: "flex", flexDirection: "column" }}>
                <span>Call Us: 1900 - 888</span>
                <span>24/7 Support Center</span>
              </p>
            </div>
          </Contact>
        </MainMenu>
      </MegaMenu>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          tempora aliquam harum, eum aperiam non nihil fuga! Deleniti cumque,
          nisi officia non illum iusto repellendus! Quisquam nostrum tempora
          dolore consectetur esse distinctio mollitia tenetur assumenda
          aspernatur iusto! Voluptatum vitae expedita ipsum, eos, accusantium
          ipsam possimus beatae placeat labore accusamus iste? Provident,
          inventore numquam quis quidem corrupti aliquam! A odit consectetur
          error odio quas illum! Sapiente dicta, esse numquam pariatur
          voluptatem reprehenderit, voluptas totam animi aut nesciunt
          consequuntur magnam sint explicabo qui expedita sequi quae laborum id!
          Atque minus dignissimos unde, cupiditate eaque maxime. Magnam quod
          perferendis sunt ex, nulla necessitatibus repudiandae nemo corporis
          vitae itaque illo iure voluptas inventore pariatur repellendus dolor.
          Hic voluptate harum quae reiciendis minus nisi id distinctio itaque
          perspiciatis blanditiis corporis quos voluptatem non totam veniam
          fuga, recusandae maiores dolor officiis consectetur dolorem ipsa. Hic
          recusandae quod perferendis quibusdam sed, reiciendis atque veniam
          debitis error accusamus! Nihil, esse quod dignissimos magnam, dolorem
          deserunt delectus itaque qui non illum similique quaerat dicta beatae
          commodi maiores officia molestias nobis odio exercitationem fugit
          facere. Totam repudiandae minima soluta voluptate tempora qui ea sed
          quia neque, ex autem laudantium eos earum dolorem atque, ratione
          veritatis. Fugiat corrupti ea minus ducimus ipsa reprehenderit. Qui
          quos voluptatibus quisquam perspiciatis, deleniti id neque quis
          necessitatibus, delectus consectetur quod obcaecati voluptates numquam
          error saepe repellat, repellendus eos in placeat. Assumenda facilis
          quis animi dolore! Officiis praesentium in, expedita est corrupti
          maxime tempore quas facere aperiam asperiores! Ut neque eos, quod non
          nulla totam sunt delectus ea, deleniti suscipit autem a. Velit ratione
          laborum a repellendus provident facilis modi eum nihil officia ea qui
          eligendi praesentium delectus vel aspernatur, mollitia saepe
          cupiditate voluptatem. Alias quo maxime quia? Cumque, obcaecati.
          Repellat, molestiae architecto voluptas tempore amet quae expedita
          soluta. Debitis omnis illo, atque quo architecto tenetur incidunt
          possimus. Nemo iste hic, dignissimos, sint debitis esse quasi ipsum
          est provident eaque minus dolorem vel. Ratione provident placeat
          doloremque, a nesciunt eaque ut, amet, debitis animi facilis minus
          quisquam natus illum aut vero nulla unde beatae excepturi libero
          nostrum? Pariatur praesentium velit, enim cum facilis, magni natus
          quis quo illum nulla doloremque perferendis accusamus ducimus
          reiciendis. Iusto quasi nesciunt mollitia hic debitis quo magni
          possimus nobis? Odio recusandae et deleniti nemo nulla fugit corrupti
          natus quisquam a doloribus, tempore incidunt ullam, rem sapiente magni
          est tenetur reiciendis. Incidunt beatae ratione odio? Animi deleniti
          ipsum praesentium quisquam, harum ducimus? Minima id eum, dolore
          facere officia animi odit voluptates maiores voluptatem veritatis
          repudiandae alias aspernatur harum, tenetur voluptate aperiam eveniet,
          ullam perspiciatis. Id libero pariatur, doloremque totam facere
          blanditiis at a hic. Laboriosam facere delectus eligendi vero odit, in
          reprehenderit, ullam placeat quis qui iste quidem! Distinctio adipisci
          officiis ipsa similique modi, repellat quo cumque, possimus quidem
          tempore aliquam a. Eligendi voluptate similique nam recusandae
          commodi! Numquam quia molestias repudiandae officiis aliquid incidunt
          corrupti cupiditate dolorem necessitatibus laboriosam consequatur ex
          enim animi totam quaerat, sequi reiciendis error officia. Eos quas
          dignissimos iste veritatis labore sit facere rerum ea optio, minus
          molestiae suscipit ipsa repellat! Aperiam aspernatur quam vero
          asperiores veritatis quod alias reprehenderit, sed accusamus est fuga
          repellendus omnis iure consequatur quas officiis dignissimos sit!
          Harum error voluptas facilis quod veritatis deleniti officia neque
          incidunt consequatur ipsum ad quis quaerat porro soluta tempore
          architecto obcaecati illo perspiciatis repudiandae dolorem, magnam ab?
          Incidunt itaque iure alias, soluta numquam nesciunt ullam iste
          maiores, id aperiam ab saepe reiciendis dolor quos? Voluptatibus ut
          iure aspernatur soluta magni facere? Iusto, cum optio minima esse quas
          deleniti vel? Magni accusantium reiciendis dolor culpa aperiam
          exercitationem temporibus eveniet ratione maxime, voluptate, incidunt
          facere vero itaque sunt! Praesentium deserunt tempore accusantium,
          exercitationem consectetur commodi officia ducimus cumque aut sed vel
          quod consequatur culpa. Rerum, aliquam, molestias beatae asperiores
          provident tempora minus libero soluta illum perspiciatis excepturi.
          Placeat error laborum fugiat! Ea laborum assumenda, rerum in
          consequatur est reprehenderit, consequuntur odio debitis saepe
          quisquam accusamus vel dolores quos corrupti! Id facere quam assumenda
          saepe fuga natus enim consequuntur, voluptatem minus, adipisci, vel
          odio vitae quasi placeat earum non? Vero obcaecati in quisquam ut
          explicabo quam, pariatur dolores tempore a excepturi voluptatum
          molestiae voluptate optio? Qui id omnis voluptate voluptatem autem,
          commodi quos inventore esse debitis, aut consequuntur deleniti, fugit
          possimus eveniet voluptatum earum officia nesciunt? Recusandae
          possimus veritatis fugit rerum quae adipisci tenetur ut consequatur
          qui et. Sit totam minus et! Recusandae, tempora rerum. Eius,
          voluptatibus explicabo. Totam quidem voluptatem rerum? Commodi tempora
          deserunt quis beatae minus eveniet vitae quasi earum delectus non
          molestias distinctio, nesciunt culpa atque aliquam magni, totam
          soluta! Sed officiis totam possimus asperiores quae nisi laboriosam
          animi, repellat eveniet quasi nulla eaque dolorem nam iure molestias.
          Quas et corporis cum illum a, amet pariatur accusantium beatae
          ducimus. Doloremque cupiditate exercitationem atque nulla animi
          laborum ducimus similique ipsa voluptatum nisi, iste, assumenda
          asperiores dolor earum doloribus quis eaque consectetur eos temporibus
          facilis dolorem cum commodi consequatur? Obcaecati fugit suscipit
          quasi, asperiores, ducimus reiciendis corporis nihil laboriosam non
          rerum inventore magnam odit tempora. Nemo placeat hic recusandae
          voluptates asperiores, vitae odit atque sequi alias perferendis rerum,
          dolores aperiam! Voluptatem, voluptatibus similique adipisci tenetur
          mollitia cum dolor neque nisi quam officiis, magnam saepe est. Aliquam
          dolor ad fuga quidem quaerat! Exercitationem facilis quo, iure ut
          impedit quidem quaerat earum et quia asperiores amet magni fugit ab
          sed aut? Error necessitatibus assumenda animi sequi ducimus aliquam
          perspiciatis aperiam debitis placeat ipsum magnam reprehenderit
          incidunt ratione doloribus est, maxime sed quam ipsam praesentium.
          Tempora provident voluptas maxime molestiae facere cupiditate rem
          fugit ratione est nam incidunt consequatur aliquid tempore explicabo
          porro, dolor quia architecto consectetur aliquam sit officia
          perspiciatis! Excepturi facilis fuga quibusdam, quasi dicta animi
          corrupti ex eius quis quo aliquid reiciendis ab id rerum saepe ducimus
          voluptates ipsam amet est quam. Voluptates ipsa ratione eum similique,
          assumenda et nobis ipsum cumque, doloremque quisquam ducimus, nihil
          incidunt reiciendis officia accusantium soluta quo! Praesentium ipsam
          enim voluptate dolorem mollitia saepe necessitatibus eaque possimus,
          voluptatum doloremque nobis quo dignissimos libero animi ducimus esse,
          qui facere perferendis, facilis accusantium harum est?
        </p>
      </div>
    </>
  );
}

export default App;
