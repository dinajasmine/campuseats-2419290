const vendors = [
    {
        id: 'kafe-asma',
        name: 'Kafe Mahallah Asma',
        location: 'Mahallah Asma, Ground Floor',
        openHours: '10:00 am - 10:00 pm',
        isOpen: true,
        menu: [
            { id: 'asm-1', name: 'Nasi Ayam Gepuk ', description: 'Crispy chicken with sambal, rice, tempeh, tofu and cabbage', price: 8, category: 'Rice', available: true }, 
            { id: 'asm-2', name: 'Nasi Ayam Kak Wok', description: 'Crispy chicken with sambal, rice, cabbage and curry', price: 6, category: 'Rice', available: true },
            { id: 'asm-3', name: 'Teh O Ais', description: 'Iced tea', price: 2, category: 'Drinks', available: false },
        ],
    },
    {
        id: 'kafe-aminah',
        name: 'Kafe Mahallah Aminah',
        location: 'Mahallah Aminah, Ground Floor',
        openHours: '8:00 am - 9:00 pm',
        isOpen: true,
        menu: [
            { id: 'ami-1', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 9, category: 'Rice', available: true},
            { id: 'ami-2', name: 'Air Bandung', description: 'Rose syrup with milk', price: 3, category: 'Drinks', available: true },
        ]
    },
]

export default vendors