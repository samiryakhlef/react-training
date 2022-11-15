import React, {useContext} from 'react'
import './Content.css'
import BtnToggle from '../BtnToggle/BtnToggle';
import { ThemeContext } from '../../Context/ThemeContext';

export default function Content() {

    const {theme} = useContext(ThemeContext)
        console.log(theme);
    

    return (
        <div className='container'>
            < BtnToggle/>
            <h1>lorem ipsum dolor sit amet</h1>
            <p className="content-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Suscipit blanditiis architecto, cumque unde quisquam recusandae. 
                Assumenda dolores voluptatibus earum amet ducimus ea sequi voluptate. 
                Officia totam dignissimos sed maxime perspiciatis?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Suscipit blanditiis architecto, cumque unde quisquam recusandae. 
                Assumenda dolores voluptatibus earum amet ducimus ea sequi voluptate. 
                Officia totam dignissimos sed maxime perspiciatis?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Suscipit blanditiis architecto, cumque unde quisquam recusandae. 
                Assumenda dolores voluptatibus earum amet ducimus ea sequi voluptate. 
                Officia totam dignissimos sed maxime perspiciatis?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Suscipit blanditiis architecto, cumque unde quisquam recusandae. 
                Assumenda dolores voluptatibus earum amet ducimus ea sequi voluptate. 
                Officia totam dignissimos sed maxime perspiciatis?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Suscipit blanditiis architecto, cumque unde quisquam recusandae. 
                Assumenda dolores voluptatibus earum amet ducimus ea sequi voluptate. 
                Officia totam dignissimos sed maxime perspiciatis?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Suscipit blanditiis architecto, cumque unde quisquam recusandae. 
                Assumenda dolores voluptatibus earum amet ducimus ea sequi voluptate. 
                Officia totam dignissimos sed maxime perspiciatis?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Suscipit blanditiis architecto, cumque unde quisquam recusandae. 
                Assumenda dolores voluptatibus earum amet ducimus ea sequi voluptate. 
                Officia totam dignissimos sed maxime perspiciatis?
            </p>
        </div>
    )
}
