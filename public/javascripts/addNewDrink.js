async function addNewDrink(url) {
    const name = document.getElementById('name').value;
    const ingredients = document.getElementById('ingredients').value;
    const description = document.getElementById('description').value;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                ingredients,
                description,
            }),
        });

        if (response.ok) {
            location.reload();
        } else {
            const errorMessage = await response.text();
            console.error(`Error adding new drink: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error adding new drink:', error);
    }
}