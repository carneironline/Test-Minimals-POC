// ----------------------------------------------------------------------

export const _mock = {
    id: () => '507f1f77bcf86cd799439011',
    email: () => 'user@example.com',
    phoneNumber: () => '+1 234 567 8901',
    time: () => new Date().toISOString(),
    boolean: () => Math.random() > 0.5,
    role: () => 'admin',
    name: {
        firstName: () => 'John',
        lastName: () => 'Doe',
        fullName: () => 'John Doe',
    },
    text: {
        title: () => 'Sample Title',
        sentence: () => 'This is a sample sentence.',
        description: () => 'This is a sample description text for testing purposes.',
    },
    number: {
        percent: () => Math.floor(Math.random() * 100),
        rating: () => Math.floor(Math.random() * 5) + 1,
        age: () => Math.floor(Math.random() * 80) + 18,
        price: () => Math.floor(Math.random() * 1000) + 10,
    },
    image: {
        cover: () => 'https://via.placeholder.com/800x600',
        avatar: () => 'https://via.placeholder.com/150x150',
    },
};
