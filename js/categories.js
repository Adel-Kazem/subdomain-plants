// Sample Categories Data for EveStore - Beauty & Activewear
const CATEGORIES = [
    // MAIN CATEGORIES
    {
        id: 1,
        name: 'Body Care',
        slug: 'body-care',
        description: 'Luxurious body oils, splashes, and skincare essentials',
        imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        featured: true,
        parent_id: null,
        active: true,
        display_order: 10,
        productIds: [1, 2], // Jasmine Body Oil, Coco Vanille Body Splash
        created_at: '2023-01-01T00:00:00Z',
        updated_at: '2024-01-15T14:45:00Z'
    },
    {
        id: 2,
        name: 'Hair Care',
        slug: 'hair-care',
        description: 'Nourishing hair mists, masks, and treatments for healthy hair',
        imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        featured: true,
        parent_id: null,
        active: true,
        display_order: 20,
        productIds: [3, 4], // Strawberry Hair Mist, Satin Remedy Hair Mask
        created_at: '2023-01-01T00:00:00Z',
        updated_at: '2024-01-15T14:45:00Z'
    },
    {
        id: 3,
        name: 'Activewear',
        slug: 'activewear',
        description: 'High-performance activewear for gym, yoga, and sports',
        imageUrl: 'category_legging.jpeg',
        featured: true,
        parent_id: null,
        active: true,
        display_order: 30,
        productIds: [5, 6, 7], // Essential Sports Bra, High-Waisted Leggings, Activewear Set
        created_at: '2023-01-01T00:00:00Z',
        updated_at: '2024-01-15T14:45:00Z'
    },
    {
        id: 4,
        name: 'T-Shirts & Tops',
        slug: 't-shirts',
        description: 'Comfortable casual tops and t-shirts for everyday wear',
        imageUrl: 'category_tshirt.jpeg',
        featured: true,
        parent_id: null,
        active: true,
        display_order: 40,
        productIds: [8], // Casual Cotton T-Shirt
        created_at: '2023-01-01T00:00:00Z',
        updated_at: '2024-01-15T14:45:00Z'
    },
    {
        id: 5,
        name: 'Loungewear',
        slug: 'loungewear',
        description: 'Cozy pajamas and lounge sets for relaxation and sleep',
        imageUrl: 'category_pijama.jpeg',
        featured: true,
        parent_id: null,
        active: true,
        display_order: 50,
        productIds: [9, 10], // Silk Touch Pajama Set, Cozy Lounge Set
        created_at: '2023-01-01T00:00:00Z',
        updated_at: '2024-01-15T14:45:00Z'
    },

    // BEAUTY SUBCATEGORIES
    {
        id: 11,
        name: 'Body Oils & Splashes',
        slug: 'body-oils-splashes',
        description: 'Moisturizing oils and refreshing body sprays',
        imageUrl: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        featured: false,
        parent_id: 1, // Child of Body Care
        active: true,
        display_order: 11,
        productIds: [1, 2],
        created_at: '2023-01-02T10:30:00Z',
        updated_at: '2024-01-15T14:45:00Z'
    },
    {
        id: 12,
        name: 'Hair Treatments',
        slug: 'hair-treatments',
        description: 'Deep conditioning masks and nourishing hair care',
        imageUrl: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        featured: false,
        parent_id: 2, // Child of Hair Care
        active: true,
        display_order: 21,
        productIds: [3, 4],
        created_at: '2023-01-02T10:30:00Z',
        updated_at: '2024-01-15T14:45:00Z'
    },

    // ACTIVEWEAR SUBCATEGORIES
    {
        id: 13,
        name: 'Sports Bras',
        slug: 'sports-bras',
        description: 'High-support sports bras for all workout intensities',
        imageUrl: 'product_1.jpeg',
        featured: false,
        parent_id: 3, // Child of Activewear
        active: true,
        display_order: 31,
        productIds: [5],
        created_at: '2023-01-03T09:15:00Z',
        updated_at: '2024-01-15T14:45:00Z'
    },
    {
        id: 14,
        name: 'Leggings',
        slug: 'leggings',
        description: 'Comfortable, squat-proof leggings for every activity',
        imageUrl: 'product_2.jpeg',
        featured: false,
        parent_id: 3, // Child of Activewear
        active: true,
        display_order: 32,
        productIds: [6],
        created_at: '2023-01-03T09:15:00Z',
        updated_at: '2024-01-15T14:45:00Z'
    },
    {
        id: 15,
        name: 'Sets',
        slug: 'sets',
        description: 'Coordinated activewear sets for a complete look',
        imageUrl: 'product_3.jpeg',
        featured: false,
        parent_id: 3, // Child of Activewear
        active: true,
        display_order: 33,
        productIds: [7],
        created_at: '2023-01-03T09:15:00Z',
        updated_at: '2024-01-15T14:45:00Z'
    },

    // T-SHIRTS SUBCATEGORIES
    {
        id: 16,
        name: 'Basic Tees',
        slug: 'basic-tees',
        description: 'Essential cotton t-shirts in classic colors',
        imageUrl: 'product_5.jpeg',
        featured: false,
        parent_id: 4, // Child of T-Shirts & Tops
        active: true,
        display_order: 41,
        productIds: [8],
        created_at: '2023-01-04T11:20:00Z',
        updated_at: '2024-01-15T14:45:00Z'
    },

    // LOUNGEWEAR SUBCATEGORIES
    {
        id: 17,
        name: 'Pajama Sets',
        slug: 'pajama-sets',
        description: 'Comfortable pajama and lounge sets for home',
        imageUrl: 'category_pijama.jpeg',
        featured: false,
        parent_id: 5, // Child of Loungewear
        active: true,
        display_order: 51,
        productIds: [9, 10],
        created_at: '2023-01-04T11:20:00Z',
        updated_at: '2024-01-15T14:45:00Z'
    },

    // ADDITIONAL CATEGORIES FOR NAVIGATION
    {
        id: 20,
        name: 'New Arrivals',
        slug: 'new-arrivals',
        description: 'Latest products and fresh additions to our collection',
        imageUrl: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        featured: true,
        parent_id: null,
        active: true,
        display_order: 5,
        productIds: [1, 6, 9], // Products marked as isNew: true
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-20T14:45:00Z'
    },
    {
        id: 21,
        name: 'Sale',
        slug: 'sale',
        description: 'Special offers and discounted items',
        imageUrl: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        featured: true,
        parent_id: null,
        active: true,
        display_order: 60,
        productIds: [2, 5, 7], // Products marked as isOnSale: true
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-20T14:45:00Z'
    },
    {
        id: 22,
        name: 'Gift Sets',
        slug: 'gift-sets',
        description: 'Curated gift sets perfect for any occasion',
        imageUrl: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        featured: false,
        parent_id: null,
        active: true,
        display_order: 70,
        productIds: [7, 9], // Set products that could be gifts
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-20T14:45:00Z'
    },

    // BEAUTY MAIN CATEGORIES (for navigation)
    {
        id: 30,
        name: 'Beauty & Care',
        slug: 'beauty-care',
        description: 'Complete collection of beauty and personal care products',
        imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        featured: true,
        parent_id: null,
        active: true,
        display_order: 1,
        productIds: [1, 2, 3, 4], // All beauty products
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-20T14:45:00Z'
    },

    // FRAGRANCE SUBCATEGORY
    {
        id: 31,
        name: 'Fragrances',
        slug: 'fragrances',
        description: 'Body mists, perfumes, and scented products',
        imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        featured: false,
        parent_id: 30, // Child of Beauty & Care
        active: true,
        display_order: 2,
        productIds: [2, 3], // Scented products
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-20T14:45:00Z'
    }
];