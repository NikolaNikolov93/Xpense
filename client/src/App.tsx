import styled from "styled-components";
import "./App.css";

const NavBar = styled.ul`
  display: flex;
  gap: 1em;
  background-color: var(--sidebars-background-color);
  padding: 0.5em 2em;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
`;

const Card = styled.div`
  padding: 0.5em 0.5em;
  height: 200px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: var(--card-background-color);
`;

const MainSection = styled.main`
  display: flex;
  gap: 0.5em;
  padding: 0.5em;
`;
const MainSectionSubsection = styled.section`
  flex-basis: calc((100% - 0.5em * 2) / 3);
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
const ProfileSection = styled(MainSectionSubsection)``;
const TasksSection = styled(MainSectionSubsection)``;
const ActionsSection = styled(MainSectionSubsection)``;
const Button = styled.button`
  background-color: var(--primary-accent);
  padding: 1em 3em;
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: var(--button-hover);
  }
`;
function App() {
  return (
    <>
      <nav>
        <NavBar>
          <li>Tasks</li>
          <li>Calendar</li>
          <li>Settings</li>
        </NavBar>
      </nav>
      <MainSection>
        <ProfileSection>
          <Card>
            <Button>Add Task</Button>
          </Card>
          <Card></Card>
          <Card></Card>
        </ProfileSection>
        <TasksSection>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </TasksSection>
        <ActionsSection>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ActionsSection>
      </MainSection>
    </>
  );
}

export default App;
