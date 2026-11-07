const vendors = [
    {
        id: 'kafe-ali',
        name: 'Kafe Mahallah Ali',
        location: 'Mahallah Ali, Ground Floor',
        openHours: '7:00 am - 10:00 pm',
        isOpen: true,
        menu: [
            { id: 'ali-1', name: 'Nasi Tomato', description: 'Fragrant tomato rice, chicken cooked in spicy & sweet tomato sauce and vegetables', price: 7.5, category: 'Rice', available: true},
            { id: 'ali-2', name: 'Nasi Arab Mandy', description: 'Fragrant spiced rice served with tender roasted meat', price: 9, category: 'Rice', available: true},
            { id: 'ali-3', name: 'Nasi Ayam Berempah', description: 'Steamed rice with crisy spiced fried chicken, cucumber, cabbage, sambal belacan and curry soup', price: 7.5, category: 'Rice', available: true},
            { id: 'ali-4', name: 'Teh O Ais', description: 'Iced tea', price: 2, category: 'Drink', available: true},
            { id: 'ali-5', name: 'Air Kelapa', description: 'Coconut water', price: 3, category: 'Drink', available: false},
            { id: 'ali-6', name: 'Pizza Peperroni', description: 'Pizza with Sliced Sausage', price: 7.5, category: 'Pizza', available: true},
            { id: 'ali-7', name: 'Dumplings', description: 'Steam dough with vegetables and meat', price: 8, category: 'Chinese Food', available: true},
        ],
    },
    {
        id: 'kafe-asma',
        name: 'Kafe Mahallah Asma',
        location: 'Mahallah Asma, Ground Floor',
        openHours: '10:00 am - 10:00 pm',
        isOpen: true,
        menu: [
            { id: 'asm-1', name: 'Nasi Ayam Gepuk ', description: 'Rice, rispy chicken with sambal, rice, tempeh, tofu and cabbage', price: 8, category: 'Rice', available: true }, 
            { id: 'asm-2', name: 'Nasi Ayam Kak Wok', description: 'Rice, crispy chicken with sambal, rice, cabbage and curry', price: 6, category: 'Rice', available: true },
            { id: 'asm-3', name: 'Teh O Ais', description: 'Iced tea', price: 2, category: 'Drink', available: false },
            { id: 'asm-4', name: 'Milo Ais', description: 'Iced chocolate malt', price: 2, category: 'Drink', available: false },
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
            { id: 'ami-3', name: 'Bubur Berlauk', description: 'Rose syrup with milk', price: 3, category: 'Drinks', available: true },

        ]
    },
]

export default vendors