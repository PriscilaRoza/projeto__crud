import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import './Main.scss';
import { Container } from '../../components/Container/styled'
import ReadAll from '../ReadAll/ReadAll';
import Create from '../Create/Create';
import DeleteAll from '../DeleteAll/DeleteAll';
import About from '../About/About';

export default function Main() {
    return (
        <>
        <BrowserRouter>
            <Navbar />
            <Container>
                <Switch>
                    <Route path="/" exact component={ReadAll}></Route>
                    <Route path="/create" component={Create}></Route>
                    <Route path="/deleteall" component={DeleteAll}></Route>
                    <Route path="/about"  component={About}></Route>
                </Switch>
            </Container>
        </BrowserRouter>    
        
        
        </>
    )
}