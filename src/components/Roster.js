import React, {useEffect, useState} from 'react';
import "./Roster.css";
// import {getRoster, shuffleArray} from "../utils/rosterUtils";
import {getNames} from "../api/rosterApi";

/**
 * Returns a list of developers and allows the user to add to the list.
 * @returns {Element}
 */
function Roster() {
    const [items, setItems] = useState([]); // State to hold the list items
    const [newItem, setNewItem] = useState(''); // State to hold the current input value

    useEffect(() => {
        // Alternative approach
        // const fetchNames = async (data) => {
        //     const newNames = await getNames();
        //     setItems(newNames);
        // }
        // fetchNames();

        getNames()
            .then(fetchedItems => setItems(fetchedItems))
            .catch(e => {console.error("Error calling getNames: ", e)});
    }, []);

    // Function to handle the input change
    const handleInputChange = (e) => {
        setNewItem(e.target.value);
    };

    // Function to add the new item to the list
    const addItem = () => {
        if (!newItem.trim()) return; // Avoid adding empty or just whitespace items
        setItems([...items, newItem]);
        setNewItem(''); // Reset the input field after adding the item
    };

    return (
        <div>
            <input
                type="text"
                value={newItem}
                onChange={handleInputChange}
                placeholder="Add new developer"
            />
            <button onClick={addItem}>Add to Roster</button>
            <ul className="roster-list">
                {items.map((item, index) => (
                    <li key={index}>{item}</li> // Using index as a key is not recommended for dynamic lists
                ))}
            </ul>
        </div>
    );
}

export default Roster;
