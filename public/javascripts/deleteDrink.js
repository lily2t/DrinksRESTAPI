async function deleteDrink(url, drinkId) {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: drinkId }),
        });

        if (response.ok) {
            location.reload();
        } else {
            const errorMessage = await response.text();
            console.error(`Error deleting drink: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error deleting drink:', error);
    }
}