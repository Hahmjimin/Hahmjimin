import styled from "styled-components";
import Main from "./components/Main";

function App() {
    return (
        <Block>
            <Main />
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export default App;
