import styled from "styled-components";
import "./App.css";

const Wrapper = styled.div`
  display: flex;
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  flex-grow: 1; /* Allows the content to fill the remaining space */
  padding: 1em;
`;

const Logo = styled.img`
  height: 300px;
`;
const NavBar = styled.nav`
  background-color: var(--sidebars-background-color);
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  min-width: 200px;
  flex-basis: 250px; /* Makes it 250px unless flex container changes it */
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-sizing: border-box; /* Ensures padding doesn't add extra height */
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.4);
`;
function App() {
  return (
    <Wrapper>
      <NavBar>
        <ul>
          <li>Dashboard</li>
          <li>Bills and Payments</li>
          <li>Settings</li>
          <li>Profile</li>
        </ul>
      </NavBar>
      <Container>
        <h1>Xpense</h1>
        <Logo src="xpense-logo.png" alt="" />
        <h1>In production...</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          veritatis quibusdam, quas blanditiis error quo cupiditate! Deserunt
          aut nisi recusandae animi adipisci consequatur, commodi id itaque
          nostrum officiis veritatis laborum. Itaque labore doloremque unde
          debitis? Sequi voluptas odit quidem nostrum neque velit, id, aliquid
          doloribus doloremque rem voluptatem maiores accusamus dignissimos
          culpa eveniet veritatis omnis? Distinctio doloribus hic laborum
          dolorum incidunt, nobis assumenda natus explicabo molestiae similique
          aliquid quis, eligendi eos veritatis quo cum cupiditate fugit
          perspiciatis quos. Enim voluptate tempora culpa nemo porro fuga eaque
          officiis pariatur quaerat ipsum! Qui illum quasi tempora blanditiis
          aperiam voluptatum voluptas provident veniam, esse quia ut alias id
          delectus nemo accusantium! Atque, dignissimos! Nesciunt harum
          accusamus facere maiores illum, a praesentium eos nihil vel odio
          voluptate quam tempore, autem hic. Accusamus consequatur magni
          corrupti inventore repellat, repellendus, dolorum rem voluptatibus
          commodi distinctio beatae laborum molestiae, nostrum rerum deserunt
          quo ut adipisci. Earum sapiente velit expedita libero tenetur aliquid
          numquam consequuntur distinctio possimus, magnam commodi cum iusto
          nisi voluptatibus totam dicta dolores corporis vero sequi temporibus
          dolor porro sint? Vel libero sint vero consectetur ullam. Voluptates,
          reiciendis id. Numquam, totam maiores non temporibus, itaque, magnam
          minima saepe ullam quidem vel autem nobis explicabo expedita illo
          culpa eum vitae enim beatae! Dolorum inventore velit earum. Dolorem,
          vel unde. Reprehenderit, omnis cumque magni voluptates a quasi
          temporibus architecto at. Reiciendis, accusamus incidunt. Labore
          blanditiis et, alias accusantium corrupti expedita dolorem facere
          maiores repellat cupiditate nisi a? Reiciendis, sunt. Illum
          dignissimos suscipit, corrupti ad saepe alias magni maxime placeat
          aperiam facilis fugit harum explicabo aspernatur eum ipsum illo cum,
          id nobis, ratione unde accusamus qui! Blanditiis unde accusantium quae
          distinctio totam fuga sequi illum aspernatur quo. Accusantium, atque
          porro. Fugiat aspernatur error magni repellat, sint sunt natus sequi
          quod exercitationem cupiditate, necessitatibus eum fuga repudiandae
          velit blanditiis. Obcaecati quis quaerat nemo laudantium at corrupti
          dolorem labore fugiat inventore aspernatur, libero a dolorum quidem
          distinctio? Facere exercitationem repellendus assumenda quos porro
          recusandae itaque saepe molestias veritatis blanditiis vero, commodi
          sequi numquam quae excepturi reiciendis sed natus quidem velit
          nesciunt eveniet? Neque placeat repellat eveniet deleniti fugiat
          ducimus, sit dolorum deserunt quam rem, rerum porro consequuntur ipsam
          corrupti reprehenderit ab dolor architecto officiis nesciunt impedit
          dolores animi incidunt aliquam temporibus. Aut, pariatur! Molestiae
          hic recusandae, omnis beatae vero dolor ipsam sequi iure quidem
          laborum animi magnam minima eaque eius dolore facilis unde soluta
          placeat qui officiis vitae mollitia magni, vel aut. Doloremque debitis
          nam aliquam perferendis esse ex magnam excepturi. Quos quo quasi nisi
          possimus animi perferendis dolorem dicta eveniet repudiandae inventore
          quaerat corrupti, culpa excepturi recusandae eligendi fugit? Deserunt
          explicabo possimus molestias dolor sint error eveniet? Ipsam ipsa
          recusandae aperiam numquam nisi aliquam, vero fugiat porro commodi
          reprehenderit saepe! Modi explicabo dolore distinctio cumque? Nesciunt
          sed sint corrupti asperiores. Cupiditate ipsum nulla unde quasi,
          corrupti adipisci distinctio aperiam corporis non porro, saepe
          explicabo quis voluptatum dolores et hic provident fuga sequi
          laboriosam ad excepturi aut assumenda odio fugiat? Consequatur neque
          blanditiis doloribus ipsam corporis voluptates eos sit laborum minus?
          Aperiam placeat error est eum incidunt aliquam quam modi omnis
          aspernatur in nostrum consequatur, atque officia praesentium officiis
          earum voluptas blanditiis consectetur optio laudantium totam. Maxime
          unde quo assumenda consequuntur! Accusamus porro iusto molestias
          aliquid ducimus! Cumque quis illum sit velit distinctio, aspernatur
          quas soluta nesciunt quae similique totam harum odit dicta atque,
          repudiandae molestias porro aperiam consectetur mollitia fugit
          obcaecati et quia temporibus assumenda? Sed, quo commodi harum
          nesciunt ipsa laboriosam earum, vero maiores quasi quas quae
          aspernatur obcaecati hic voluptatum suscipit quis aut nobis iure, quos
          ipsam! Modi nesciunt alias dignissimos quod molestiae enim! Ducimus
          consectetur ratione quibusdam et aperiam maiores? Similique sed rem
          reprehenderit voluptatem! Maiores, debitis iusto libero fugiat
          dignissimos aut eligendi culpa veniam odit placeat velit quas
          doloribus facere cumque architecto dicta eius dolore hic aliquid nobis
          recusandae consequatur quis ipsam tenetur. Omnis asperiores minima
          consequatur exercitationem necessitatibus at fugit harum voluptatem
          deserunt alias molestias repellat dicta hic autem debitis, recusandae
          voluptas eum repudiandae. Ipsum, nesciunt fugit animi odit soluta
          eligendi perferendis itaque harum exercitationem tenetur, consectetur
          deleniti labore! Labore est fugit id voluptatibus ipsam veniam dolore,
          rerum maiores quibusdam corrupti adipisci aperiam, quas nemo
          consequuntur. Est assumenda sint soluta fugit vitae voluptatem,
          sapiente odio, inventore nam aut odit nesciunt distinctio? Ab cum
          minima, molestiae, iusto doloribus optio exercitationem reprehenderit
          blanditiis nam pariatur quasi ducimus eius. Ipsam optio necessitatibus
          culpa adipisci blanditiis accusamus amet iusto quaerat suscipit velit
          cum sequi repellendus, neque cupiditate eius iste. Vel enim voluptatem
          obcaecati distinctio tenetur iusto, aspernatur rem fugit incidunt odit
          recusandae alias quo qui sapiente cupiditate dolorem, assumenda modi
          dolor eveniet itaque veritatis saepe, ab quisquam! Eaque, cupiditate.
          Laudantium architecto molestiae deserunt dolorem, quidem impedit, et
          ex maxime sed est suscipit consequuntur earum placeat laborum enim
          doloribus quasi amet perferendis molestias pariatur. Sunt minus,
          quasi, repudiandae dolores ratione, non velit aspernatur recusandae
          molestias rerum sit suscipit. Minus minima doloremque corrupti
          nesciunt nisi, porro expedita ea nobis deserunt! Voluptas repellendus
          at ducimus. Accusamus autem aliquid harum dicta fugit deserunt nihil
          eos facere, quibusdam ea magni velit rerum doloribus totam nulla modi
          quos expedita reiciendis voluptatum ipsa numquam. Unde officiis
          suscipit odit optio! A excepturi harum officiis commodi facilis quasi
          repellendus totam quod, vitae aperiam quae laborum placeat officia
          nesciunt et optio distinctio dolores reiciendis, error corrupti
          recusandae similique. Numquam laboriosam sunt fuga rem dolorem tempore
          similique ex fugiat, dolor hic id dolorum! Veniam ab laudantium
          veritatis beatae illo eligendi dolor reiciendis, iure nisi illum.
          Atque sit error officia temporibus incidunt at vero, repellat
          sapiente. Voluptates porro officiis placeat reiciendis, aliquid veniam
          ullam libero doloremque quam odit enim tenetur esse earum, labore
          cumque quo eveniet molestiae. Fuga harum temporibus quae esse maiores
          quis architecto expedita accusantium est, distinctio eos cumque
          pariatur omnis sapiente, delectus porro cupiditate eligendi repellat
          ipsum ex! Incidunt, necessitatibus error enim veritatis beatae magnam
          animi iste illo praesentium fugit odit assumenda iusto libero
          consequatur doloremque eius doloribus ab. Sequi nihil vel vero
          expedita nostrum harum. Minus sequi culpa voluptas saepe itaque
          exercitationem ullam consequatur ipsam quisquam!
        </p>
      </Container>
    </Wrapper>
  );
}

export default App;
