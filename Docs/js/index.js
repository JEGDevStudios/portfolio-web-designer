document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
    };

    try {
        const response = await fetch('http://localhost:3000/send-email', { // URL del backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message); // Mostrar mensaje de éxito
            e.target.reset(); // Opcional: Reinicia el formulario
        } else {
            alert(result.error || 'Hubo un error al enviar el mensaje'); // Mostrar mensaje de error
        }
    } catch (error) {
        console.error('Hubo un problema al enviar el formulario:', error); // Para depuración
        alert('Hubo un problema al enviar el formulario.');
    }
});
