// Datos de Moteles
const motelesData = [
    {
        id: 1,
        nombre: 'Motel Lua',
        precio: 280,
        precioTexto: 'Desde $280',
        ubicacion: 'Av. Tecnológico 1220, Fracc. Ojo de Agua de las Palmitas (José Guadalupe Peralta Gámez), 20263 Aguascalientes, Ags.',
        zona: 'sur',
        telefono: '📞 Disponible 24/7',
        imagen: 'https://www.hospedarme.com.mx/wp-content/uploads/2018/08/motel-lua.jpg',
        destacado: true,
        rating: 4.8,
        features: [
            '✓ Sala de estar',
            '✓ Canales por cable',
            '✓ Aire acondicionado',
            '✓ Privacidad Total'
        ],
        lat: 21.8648,
        lng: -102.23705
    },
    {
        id: 2,
        nombre: 'Motel Los Arcos',
        precio: 400,
        precioTexto: 'Desde $400',
        ubicacion: 'Aguascalientes',
        zona: 'norte',
        telefono: '📞 449 973 1118',
        imagen: 'https://motelesmexico.com.mx/wp-content/uploads/2023/05/Motel-Los-Arcos-en-Aguascalientes-Ags.-2.jpg',
        rating: 4.5,
        features: [
            '✓ Aire acondicionado y calefacción',
            '✓ Cama King size.',
            '✓ Televisor.',
            '✓ Música',
            '✓ Conexión de internet inalámbrico'
        ],
        lat: 21.943944101443112,
        lng: -102.29104183225077
    },
    {
        id: 3,
        nombre: 'Motel EKXA',
        precio: 450,
        precioTexto: 'Desde $450',
        ubicacion: 'Blvd. A Zacatecas 316, Desarrollo Especial Bulevar a Zacatecas, 20123 Aguascalientes, Ags., México',
        zona: 'norte',
        telefono: '📞 449 388 0667',
        info: 'Instalaciones del motel EKXA son elegantes y confortables. Las habitaciones tienen un estilo moderno y acogedor',
        imagen: 'https://motelesmexico.com.mx/wp-content/uploads/2023/05/Motel-EKXA-en-Aguascalientes-Ags.-4.jpg',
        rating: 4.9,
        features: [
            '✓ Habitación Torre: $450 pesos por 6 horas',
            '✓ Suite Estándar: consultar precio',
            '✓ Con jacuzzi: consultar precio',
            '✓ Con alberca: consultar precio'
        ],
        lat: 21.931399380682137,
        lng: -102.2906894340993
    },
    {
        id: 4,
        nombre: 'Motel Rapid Inn',
        precio: 350,
        precioTexto: 'Desde $350',
        ubicacion: 'Av. de la Convención de 1914 Nte. 308, Morelos, 20140 Aguascalientes, Ags., México',
        zona: 'centro',
        info: 'Opción económica y funcional',
        imagen: 'https://motelesmexico.com.mx/wp-content/uploads/2023/05/Motel-Rapid-Inn-en-Aguascalientes-Ags.-1.jpg',
        rating: 4.2,
        features: [
            '✓ Habitación Estandar: $350',
            '✓ Con Jacuzzi $650'
        ],
        lat: 21.90161536047889,
        lng: -102.29079491690983
    },
    {
        id: 5,
        nombre: 'Motel Castillo',
        precio: 280,
        precioTexto: 'Desde $280',
        ubicacion: 'Blvd. Lic. Adolfo Ruiz Cortines 921, Francisco Villa, 20218 Aguascalientes, Ags., México',
        zona: 'sur',
        telefono: '📞 Disponible 24/7',
        imagen: 'https://th.bing.com/th/id/R.13e4cc802b2d95b92fa4ce89ebc88d97?rik=D7%2biel9nVk2gdw&riu=http%3a%2f%2fwww.hospedarme.com.mx%2fwp-content%2fuploads%2f2018%2f10%2fmotel-castillo.jpg&ehk=T2MITzu%2bbxjRuinPzXegSgmRFRL63Rp12XTJBUPTUz0%3d&risl=&pid=ImgRaw&r=0',
        destacado: true,
        rating: 4.7,
        features: [
            '✓ Vapor',
            '✓ Jacuzzi & Hidromasaje',
            '✓ Ambientes Temáticos',
            '✓ Privacidad Total'
        ],
        lat: 21.872291,
        lng: -102.327774
    },
    {
        id: 6,
        nombre: 'Aruma Motel',
        precio: 300,
        precioTexto: 'Desde $300',
        ubicacion: 'Aguascalientes',
        zona: 'centro',
        info: 'Precios desde $300 pesos',
        telefono: '📞 449 506 9754',
        imagen: 'https://tse4.mm.bing.net/th/id/OIP.U1LspiiAs_397GuonyZ9HQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
        rating: 4.4,
        features: [
            '✓ Habitación Sencilla: $300 por 6 horas',
            '✓ Habitación con Jacuzzi: $900'
        ],
        lat: 21.867708932927126,
        lng: -102.28155884389783
    },
    {
        id: 7,
        nombre: 'Motel As Feixas',
        precio: 300,
        precioTexto: 'Desde $300',
        ubicacion: 'Blvd. José María Chávez 2310, Rústicos Calpulli, 20296 Aguascalientes, Ags., México',
        zona: 'sur',
        info: 'Salida a Calvillo',
        telefono: '📞 449 971 1395',
        imagen: 'https://motelesmexico.com.mx/wp-content/uploads/2023/05/Motel-As-Feixas-Ags-en-Aguascalientes-Ags.-1.jpg',
        rating: 4.6,
        features: [
            '✓ Habitación Sencilla: $300',
            '✓ Habitación con Jacuzzi: $350',
            '✓ Pool Dance $500',
            '✓ Con alberca: $1,200'
        ],
        lat: 21.830534452899897,
        lng: -102.28715554759519
    },
    {
        id: 8,
        nombre: 'Motel Pedra',
        precio: 370,
        precioTexto: 'Desde $370',
        ubicacion: 'Av Tecnológico 902, 20263 Municipio de Aguascalientes, Aguascalientes ',
        zona: 'norte',
        info: 'Salida a Calvillo',
        telefono: '📞 449 974 2929',
        imagen: 'https://motelesmexico.com.mx/wp-content/uploads/2023/05/Motel-Pedra-en-Aguascalientes-Ags.-4.jpg',
        rating: 4.9,
        features: [
            '✓ Habitación Estandar: $370',
            '✓ Habitación Jacuzzi: $650',
            '✓ Habitación alberca y Jacuzzi: $1,200',
            '✓ Master Suite doble alberca y jacuzzi: $1,600'
        ],
        lat: 21.86466,
        lng: -102.23628
    }
];

//Renderizado de Moteles
function renderMoteles(data) {
    const grid = document.getElementById('motels-grid');
    grid.innerHTML = '';

    data.forEach(motel => {
        const card = document.createElement('div');
        card.className = `pricing-card ${motel.destacado ? 'highlight' : ''}`;
        const featuresHTML = motel.features.map(f => `<span class="feature-pill">${f}</span>`).join('');

        card.innerHTML = "`
            <div class="card-image-wrapper">
                ${motel.destacado ? '<div class="card-badge">Destacado</div>' : ''}
                <div class="rating-tag">★ ${motel.rating || 'N/A'}</div>
                <img src="${motel.imagen}" alt="${motel.nombre}" class="motel-image">
            </div>
            <div class="pricing-content">
                <h3 class="motel-name">${motel.nombre}</h3>
                <div class="motel-location">📍 ${motel.ubicacion}</div>
                <div class="tags-container">${featuresHTML}</div>
                <div class="price-row">
                    <div>
                        <div class="price-tag">${motel.precioTexto}</div>
                    </div>
                    <button class="card-btn" style="width: auto; padding: 0.6rem 1.5rem;" onclick="openReservationModal()">Reservar</button>
                </div>
            </div>
        ";
        grid.appendChild(card);
    });
}

function filterMotels() {
    const text = document.getElementById('searchInput').value.toLowerCase();
    const zone = document.getElementById('locationFilter').value;

    const filtered = motelesData.filter(m => {
        const matchText = m.nombre.toLowerCase().includes(text) || m.ubicacion.toLowerCase().includes(text);
        const matchZone = zone === 'all' || m.zona.toLowerCase() === zone;
        return matchText && matchZone;
    });

    renderMoteles(filtered);
}

// Modal Functions
function openReservationModal() { document.getElementById('reservationModal').style.display = 'flex'; }
function closeReservationModal() { document.getElementById('reservationModal').style.display = 'none'; }
function handleReservation(e) {
    e.preventDefault();
    const nombre = e.target.querySelector('input[type="text"]').value;
    const fecha = e.target.querySelector('input[type="date"]').value;
    const comentarios = e.target.querySelector('textarea').value;
    
    const numeroWhatsapp = '5214491234567'; // Reemplaza con el número de WhatsApp real
    let mensaje = `¡Hola! Quiero reservar una suite en EXXXTASIS.\n\n`;
    mensaje += `Nombre: ${nombre}\n`;
    mensaje += `Fecha: ${fecha}\n`;
    if (comentarios) {
        mensaje += `Comentarios: ${comentarios}\n`;
    }

    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
    
    closeReservationModal();
}

window.onclick = function(e) {
    if(e.target == document.getElementById('reservationModal')) closeReservationModal();
}

//Navbar Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// --- INICIALIZAR MAPA (Leaflet) ---
function initLeafletMap() {
    // Coordenadas de Aguascalientes
    var map = L.map('map').setView([21.8853, -102.2916], 13);

    // Mapa Base (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Agregar Marcadores
    motelesData.forEach(motel => {
        if(motel.lat && motel.lng) {
            L.marker([motel.lat, motel.lng])
                .addTo(map)
                .bindPopup(`<b>${motel.nombre}</b><br>${motel.precioTexto}`);
        }
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderMoteles(motelesData);
    initLeafletMap(); // Iniciar mapa gratuito
});
