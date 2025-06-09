
// Sample recipe data
const recipes = [
    {
        id: 1,
        name: "Berry Blast Smoothie",
        category: "smoothies",
        image: "🍓",
        description: "A refreshing blend of mixed berries, banana, and almond milk.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "5 min",
        ingredients: [
            "1 cup mixed berries (frozen)",
            "1 ripe banana",
            "1 cup almond milk",
            "1 tbsp honey or maple syrup",
            "1 tsp vanilla extract"
        ],
        instructions: [
            "Add all ingredients to a high-speed blender",
            "Blend on high for 60-90 seconds until smooth",
            "Pour into glasses and serve immediately",
            "Garnish with fresh berries if desired"
        ]
    },
    {
        id: 2,
        name: "Green Goddess Smoothie",
        category: "smoothies",
        image: "🥬",
        description: "Nutrient-packed green smoothie with spinach, mango, and coconut water.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "5 min",
        ingredients: [
            "2 cups fresh spinach",
            "1 frozen mango, cubed",
            "1/2 avocado",
            "1 cup coconut water",
            "1 banana",
            "1 tbsp chia seeds",
            "Juice of 1/2 lime"
        ],
        instructions: [
            "Add all ingredients to a high-speed blender",
            "Blend on high for 90 seconds until completely smooth",
            "Add more coconut water if needed for desired consistency",
            "Serve immediately, garnish with lime wedge"
        ]
    },
    {
        id: 3,
        name: "Tropical Paradise Smoothie",
        category: "smoothies",
        image: "🥥",
        description: "A creamy tropical blend with pineapple, coconut, and passion fruit.",
        dietTags: ["vegetarian", "gluten-free"],
        prepTime: "5 min",
        ingredients: [
            "1 cup frozen pineapple chunks",
            "1/2 frozen banana",
            "1/2 cup coconut milk",
            "1/4 cup Greek yogurt",
            "1 tbsp coconut flakes",
            "1 passion fruit (pulp only)",
            "1 tsp fresh ginger, grated"
        ],
        instructions: [
            "Combine all ingredients except passion fruit in blender",
            "Blend until smooth and creamy",
            "Pour into glass and swirl in passion fruit pulp",
            "Top with toasted coconut flakes"
        ]
    },
    {
        id: 4,
        name: "Chocolate Peanut Butter Protein Smoothie",
        category: "smoothies",
        image: "🍫",
        description: "A rich and satisfying smoothie with chocolate, peanut butter, and protein for post-workout recovery.",
        dietTags: ["vegetarian", "gluten-free", "high-protein"],
        prepTime: "5 min",
        ingredients: [
            "1 frozen banana",
            "1 tbsp natural peanut butter",
            "1 tbsp unsweetened cocoa powder",
            "1 scoop chocolate or vanilla protein powder",
            "1 cup unsweetened almond milk",
            "1 tsp honey or maple syrup (optional)"
        ],
        instructions: [
            "Add all ingredients to a blender",
            "Blend until creamy and smooth",
            "Serve immediately with a few cocoa nibs or peanut pieces on top"
        ]
    },
    {
        id: 5,
        name: "Creamy Oat & Blueberry Smoothie",
        category: "smoothies",
        image: "🫐",
        description: "A fiber-rich breakfast smoothie with oats, blueberries, and Greek yogurt.",
        dietTags: ["vegetarian", "gluten-free (if using certified oats)"],
        prepTime: "5 min",
        ingredients: [
            "1/2 cup rolled oats",
            "1 cup frozen blueberries",
            "1/2 cup Greek yogurt",
            "1 cup unsweetened almond milk",
            "1 tsp cinnamon",
            "1 tbsp honey (optional)"
        ],
        instructions: [
            "Add oats, fruit, yogurt, milk, and cinnamon to a blender",
            "Blend until smooth and thick",
            "Pour into a glass and enjoy immediately"
        ]
    },
    {
        id: 6,
        name: "Citrus Sunrise Smoothie",
        category: "smoothies",
        image: "🍊",
        description: "A zesty, immune-boosting smoothie with orange, carrot, and ginger.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "5 min",
        ingredients: [
            "1 large orange, peeled and segmented",
            "1/2 cup carrot juice or 1 medium carrot (steamed if raw)",
            "1/2 frozen banana",
            "1/2 cup mango chunks (frozen or fresh)",
            "1/2 tsp grated fresh ginger",
            "1/2 cup water or coconut water"
        ],
        instructions: [
            "Add all ingredients to blender",
            "Blend until smooth and frothy",
            "Serve chilled with a slice of orange on the rim"
        ]
    },
    {
        id: 7,
        name: "Minty Melon Smoothie",
        category: "smoothies",
        image: "🍈",
        description: "A light and refreshing blend of honeydew, cucumber, and mint.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "5 min",
        ingredients: [
            "1 cup honeydew melon, cubed and chilled",
            "1/2 cup cucumber, peeled and chopped",
            "1/2 frozen banana",
            "1/2 cup coconut water",
            "5-6 fresh mint leaves",
            "Juice of 1/2 lime"
        ],
        instructions: [
            "Combine all ingredients in blender",
            "Blend until smooth and refreshing",
            "Serve over ice, garnish with a mint sprig"
        ]
    },
    {
        id: 8,
        name: "Mediterranean Quinoa Bowl",
        category: "salads",
        image: "🥗",
        description: "A protein-packed salad bowl with quinoa and fresh vegetables.",
        dietTags: ["vegetarian", "high-protein"],
        prepTime: "20 min",
        ingredients: [
            "1 cup cooked quinoa",
            "1 cucumber, diced",
            "1 cup cherry tomatoes",
            "1/2 red onion, sliced",
            "1/2 cup olives",
            "1/2 cup feta cheese"
        ],
        instructions: [
            "Combine quinoa, vegetables, and olives in a bowl.",
            "Make dressing with olive oil, lemon juice, and herbs.",
            "Add dressing and top with feta cheese."
        ]
    },
    {
        id: 9,
        name: "Buddha Bowl with Tahini Dressing",
        category: "salads",
        image: "🍲",
        description: "Colorful nourish bowl with roasted vegetables, quinoa, and creamy tahini dressing.",
        dietTags: ["vegan", "high-protein"],
        prepTime: "30 min",
        ingredients: [
            "1 cup cooked quinoa",
            "1 cup roasted chickpeas",
            "1 cup roasted sweet potato cubes",
            "2 cups massaged kale",
            "1/2 cup shredded purple cabbage",
            "1 avocado, sliced",
            "2 tbsp pumpkin seeds",
            "3 tbsp tahini for dressing",
            "2 tbsp lemon juice",
            "1 tbsp maple syrup"
        ],
        instructions: [
            "Roast chickpeas and sweet potato at 425°F for 20 minutes",
            "Massage kale with a pinch of salt until softened",
            "Whisk together tahini, lemon juice, and maple syrup",
            "Arrange all ingredients in bowl, drizzle with dressing",
            "Sprinkle with pumpkin seeds"
        ]
    },
    {
        id: 10,
        name: "Mexican Street Corn Salad",
        category: "salads",
        image: "🌽",
        description: "Fresh corn salad with lime, chili, and cotija cheese inspired by elote.",
        dietTags: ["vegetarian", "gluten-free"],
        prepTime: "15 min",
        ingredients: [
            "4 cups corn kernels (grilled or roasted)",
            "1/4 cup mayonnaise",
            "1/4 cup cotija cheese, crumbled",
            "2 tbsp lime juice",
            "1 tsp chili powder",
            "1/4 cup cilantro, chopped",
            "1 jalapeño, minced",
            "Salt to taste"
        ],
        instructions: [
            "Grill or roast corn until slightly charred",
            "Mix mayonnaise, lime juice, and chili powder",
            "Toss corn with dressing and jalapeño",
            "Top with cotija cheese and cilantro",
            "Season with salt and serve immediately"
        ]
    },
    {
        id: 11,
        name: "Asian Sesame Crunch Salad",
        category: "salads",
        image: "🥬",
        description: "A crisp salad with cabbage, edamame, and a tangy sesame-ginger dressing.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "20 min",
        ingredients: [
            "2 cups shredded napa cabbage",
            "1 cup shredded red cabbage",
            "1 cup cooked edamame",
            "1 carrot, julienned",
            "2 green onions, sliced",
            "1 tbsp sesame seeds",
            "1/4 cup rice vinegar",
            "2 tbsp tamari (gluten-free soy sauce)",
            "1 tbsp sesame oil",
            "1 tbsp maple syrup",
            "1 tsp fresh grated ginger"
        ],
        instructions: [
            "Whisk vinegar, tamari, sesame oil, maple syrup, and ginger for dressing",
            "Toss all vegetables and edamame in a large bowl",
            "Drizzle with dressing and mix well",
            "Sprinkle with sesame seeds before serving"
        ]
    },
    {
        id: 12,
        name: "Strawberry Spinach Salad",
        category: "salads",
        image: "🍓",
        description: "A sweet and savory salad with strawberries, spinach, and balsamic glaze.",
        dietTags: ["vegetarian", "gluten-free"],
        prepTime: "10 min",
        ingredients: [
            "4 cups baby spinach",
            "1 cup fresh strawberries, sliced",
            "1/4 red onion, thinly sliced",
            "1/4 cup crumbled goat cheese or feta",
            "1/4 cup pecans or walnuts, toasted",
            "2 tbsp balsamic glaze or vinaigrette"
        ],
        instructions: [
            "Place spinach in a bowl and top with strawberries and onion",
            "Add cheese and toasted nuts",
            "Drizzle with balsamic glaze and serve immediately"
        ]
    },
    {
        id: 13,
        name: "Chickpea & Avocado Salad",
        category: "salads",
        image: "🥑",
        description: "A quick, protein-rich salad with creamy avocado and zesty lemon.",
        dietTags: ["vegan", "gluten-free", "high-protein"],
        prepTime: "10 min",
        ingredients: [
            "1 can chickpeas, rinsed and drained",
            "1 avocado, diced",
            "1/2 cucumber, chopped",
            "1/4 cup chopped parsley",
            "2 tbsp lemon juice",
            "1 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Combine chickpeas, avocado, cucumber, and parsley in a bowl",
            "Whisk together lemon juice, olive oil, salt, and pepper",
            "Pour dressing over salad and gently mix",
            "Serve immediately or chilled"
        ]
    },
    {
        id: 14,
        name: "Roasted Beet & Arugula Salad",
        category: "salads",
        image: "🧡",
        description: "Earthy roasted beets paired with peppery arugula and tangy goat cheese.",
        dietTags: ["vegetarian", "gluten-free"],
        prepTime: "25 min",
        ingredients: [
            "2 medium beets, roasted and sliced",
            "3 cups fresh arugula",
            "1/4 cup goat cheese, crumbled",
            "1/4 cup walnuts, toasted",
            "2 tbsp balsamic vinegar",
            "1 tbsp olive oil",
            "Salt and black pepper to taste"
        ],
        instructions: [
            "Roast beets at 400°F for 20–25 minutes, then let cool and slice",
            "Toss arugula with balsamic vinegar, olive oil, salt, and pepper",
            "Top with beets, goat cheese, and walnuts",
            "Serve warm or chilled"
        ]
    },
    {
        id: 15,
        name: "Avocado Toast",
        category: "breakfast",
        image: "🥑",
        description: "Classic avocado toast topped with a perfectly poached egg.",
        dietTags: ["vegetarian"],
        prepTime: "15 min",
        ingredients: [
            "2 slices whole grain bread",
            "1 ripe avocado",
            "2 eggs",
            "Salt and pepper",
            "Red pepper flakes"
        ],
        instructions: [
            "Toast the bread until golden brown.",
            "Mash avocado and spread on toast.",
            "Top with poached eggs and seasonings."
        ]
    },
    {
        id: 16,
        name: "Chocolate Banana Pancakes",
        category: "breakfast",
        image: "🥞",
        description: "Fluffy pancakes with chocolate chips and banana slices.",
        dietTags: ["vegetarian"],
        prepTime: "20 min",
        ingredients: [
            "1 cup flour",
            "1 tbsp sugar",
            "1 tsp baking powder",
            "1 egg",
            "1 cup milk",
            "1 banana, sliced",
            "1/4 cup chocolate chips"
        ],
        instructions: [
            "Mix dry ingredients in a bowl.",
            "Whisk egg and milk, then combine with dry ingredients.",
            "Fold in chocolate chips.",
            "Cook on a hot griddle and top with banana slices."
        ]
    },
    {
        id: 17,
        name: "Sweet Potato Hash with Eggs",
        category: "breakfast",
        image: "🍠",
        description: "Crispy sweet potato hash topped with perfectly fried eggs and fresh herbs.",
        dietTags: ["vegetarian", "gluten-free"],
        prepTime: "25 min",
        ingredients: [
            "2 large sweet potatoes, diced",
            "1 red bell pepper, diced",
            "1/2 yellow onion, diced",
            "4 eggs",
            "2 tbsp olive oil",
            "1 tsp smoked paprika",
            "1/2 tsp cumin",
            "Fresh cilantro",
            "Salt and pepper"
        ],
        instructions: [
            "Heat olive oil in large skillet over medium-high heat",
            "Add sweet potatoes, cook 8-10 minutes until crispy",
            "Add bell pepper and onion, cook 5 more minutes",
            "Season with spices, make wells in hash",
            "Crack eggs into wells, cover and cook until whites are set",
            "Garnish with cilantro and serve hot"
        ]
    },
    {
        id: 18,
        name: "Overnight Steel-Cut Oats",
        category: "breakfast",
        image: "🥣",
        description: "Creamy overnight oats with berries, nuts, and a touch of maple sweetness.",
        dietTags: ["vegetarian"],
        prepTime: "5 min",
        ingredients: [
            "1/2 cup steel-cut oats",
            "1 cup almond milk",
            "2 tbsp Greek yogurt",
            "1 tbsp maple syrup",
            "1 tbsp almond butter",
            "1/4 cup mixed berries",
            "1 tbsp chopped walnuts",
            "1/2 tsp cinnamon"
        ],
        instructions: [
            "Combine oats, almond milk, yogurt, and maple syrup in jar",
            "Stir well, cover and refrigerate overnight",
            "In morning, stir in almond butter and cinnamon",
            "Top with berries and walnuts before serving"
        ]
    },
    {
        id: 19,
        name: "Chia Pudding Parfait",
        category: "breakfast",
        image: "🍨",
        description: "A make-ahead breakfast with layers of chia pudding, fruit, and granola.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "10 min + overnight chill",
        ingredients: [
            "3 tbsp chia seeds",
            "1 cup almond milk",
            "1/2 tsp vanilla extract",
            "1/2 cup mixed berries",
            "1/4 cup granola (gluten-free if needed)",
            "1 tsp maple syrup (optional)"
        ],
        instructions: [
            "Mix chia seeds, almond milk, vanilla, and maple syrup in a jar",
            "Stir well and refrigerate overnight",
            "In the morning, layer pudding with berries and granola",
            "Serve chilled"
        ]
    },
    {
        id: 20,
        name: "Oatmeal Power Bowl",
        category: "breakfast",
        image: "🥣",
        description: "Hearty oatmeal topped with seeds, nuts, and fruit for long-lasting energy.",
        dietTags: ["vegetarian"],
        prepTime: "10 min",
        ingredients: [
            "1/2 cup rolled oats",
            "1 cup oat milk or water",
            "1/2 banana, sliced",
            "1 tbsp flaxseeds",
            "1 tbsp almond butter",
            "Handful of blueberries",
            "Dash of cinnamon"
        ],
        instructions: [
            "Cook oats in oat milk over medium heat until creamy",
            "Pour into bowl and top with banana, blueberries, flaxseeds",
            "Drizzle with almond butter and sprinkle cinnamon",
            "Serve warm"
        ]
    },
    {
        id: 21,
        name: "Savory Veggie Breakfast Wrap",
        category: "breakfast",
        image: "🌯",
        description: "A warm wrap filled with sautéed veggies, hummus, and avocado.",
        dietTags: ["vegan"],
        prepTime: "15 min",
        ingredients: [
            "1 whole wheat tortilla",
            "1/4 cup hummus",
            "1/4 cup sautéed bell peppers and onions",
            "1/4 cup spinach",
            "1/4 avocado, sliced",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Warm the tortilla in a dry pan",
            "Spread hummus across the center",
            "Add sautéed veggies, spinach, and avocado",
            "Season with salt and pepper",
            "Wrap tightly and slice in half"
        ]
    },
    {
        id: 22,
        name: "Spaghetti Carbonara",
        category: "pasta",
        image: "🍝",
        description: "Classic Italian pasta with eggs, cheese, and pancetta.",
        dietTags: ["high-protein"],
        prepTime: "25 min",
        ingredients: [
            "8 oz spaghetti",
            "2 eggs",
            "1/2 cup grated Parmesan",
            "4 oz pancetta, diced",
            "2 cloves garlic",
            "Black pepper"
        ],
        instructions: [
            "Cook pasta according to package directions.",
            "Fry pancetta until crispy, add garlic.",
            "Whisk eggs and cheese in a bowl.",
            "Toss hot pasta with egg mixture and pancetta."
        ]
    },
    {
        id: 23,
        name: "Vegetable Lasagna",
        category: "pasta",
        image: "🍛",
        description: "Layers of pasta, vegetables, and cheese baked to perfection.",
        dietTags: ["vegetarian"],
        prepTime: "45 min",
        ingredients: [
            "Lasagna noodles",
            "2 cups marinara sauce",
            "2 cups ricotta cheese",
            "2 cups mozzarella",
            "1 cup spinach",
            "1 zucchini, sliced",
            "1 eggplant, sliced"
        ],
        instructions: [
            "Layer sauce, noodles, vegetables, and cheese.",
            "Repeat layers ending with cheese on top.",
            "Bake at 375°F for 30 minutes covered.",
            "Uncover and bake 15 more minutes until bubbly."
        ]
    },
    {
        id: 24,
        name: "Lemon Herb Pasta Primavera",
        category: "pasta",
        image: "🍋",
        description: "Light pasta with seasonal vegetables and fresh lemon herb sauce.",
        dietTags: ["vegetarian"],
        prepTime: "25 min",
        ingredients: [
            "12 oz whole wheat pasta",
            "2 cups mixed vegetables (zucchini, bell peppers, cherry tomatoes)",
            "3 cloves garlic, minced",
            "1/4 cup olive oil",
            "Zest and juice of 2 lemons",
            "1/4 cup fresh herbs (basil, parsley)",
            "1/2 cup Parmesan cheese",
            "Salt and pepper"
        ],
        instructions: [
            "Cook pasta according to package directions",
            "Sauté vegetables and garlic in olive oil until tender",
            "Add lemon zest, juice, and herbs to vegetables",
            "Toss hot pasta with vegetable mixture",
            "Add Parmesan cheese and season to taste"
        ]
    },
    {
        id: 25,
        name: "Pesto Zucchini Noodles",
        category: "pasta",
        image: "🌿",
        description: "Spiralized zucchini noodles with homemade basil pesto and cherry tomatoes.",
        dietTags: ["vegetarian", "gluten-free"],
        prepTime: "15 min",
        ingredients: [
            "4 large zucchini, spiralized",
            "2 cups fresh basil",
            "1/2 cup pine nuts",
            "1/2 cup Parmesan cheese",
            "3 cloves garlic",
            "1/2 cup olive oil",
            "1 cup cherry tomatoes, halved",
            "Salt and pepper"
        ],
        instructions: [
            "Make pesto by blending basil, pine nuts, Parmesan, and garlic",
            "Slowly add olive oil while blending until smooth",
            "Lightly sauté zucchini noodles for 2-3 minutes",
            "Toss with pesto and cherry tomatoes",
            "Season with salt and pepper, serve immediately"
        ]
    },
    {
        id: 26,
        name: "Penne Arrabbiata",
        category: "pasta",
        image: "🍝",
        description: "Spicy Italian pasta with a rich tomato sauce.",
        dietTags: ["vegetarian"],
        prepTime: "25 min",
        ingredients: [
            "8 oz penne pasta",
            "2 cups tomato sauce",
            "2 cloves garlic, minced",
            "1 tsp red pepper flakes",
            "1 tbsp olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Cook pasta according to package directions.",
            "Sauté garlic in olive oil, add tomato sauce and spices.",
            "Simmer for 10 minutes.",
            "Toss pasta with sauce and serve."
        ]
    },
    {
        id: 27,
        name: "Creamy Avocado Pasta",
        category: "pasta",
        image: "🥑",
        description: "A creamy, dairy-free pasta sauce made with ripe avocados, lemon, and garlic.",
        dietTags: ["vegan", "gluten-free option"],
        prepTime: "20 min",
        ingredients: [
            "8 oz whole grain pasta (or gluten-free pasta)",
            "2 ripe avocados",
            "2 cloves garlic",
            "2 tbsp lemon juice",
            "1/4 cup fresh basil",
            "1/4 cup olive oil",
            "Salt and pepper to taste",
            "Cherry tomatoes (optional, for topping)"
        ],
        instructions: [
            "Cook pasta according to package directions",
            "Blend avocado, garlic, lemon juice, basil, olive oil, salt, and pepper until smooth",
            "Toss pasta with sauce while still warm",
            "Top with cherry tomatoes or extra basil if desired"
        ]
    },
    {
        id: 28,
        name: "Chickpea Pasta with Spinach & Sun-Dried Tomatoes",
        category: "pasta",
        image: "🌞",
        description: "High-protein chickpea pasta tossed with spinach, sun-dried tomatoes, and garlic.",
        dietTags: ["vegan", "gluten-free", "high-protein"],
        prepTime: "20 min",
        ingredients: [
            "8 oz chickpea pasta",
            "2 cups baby spinach",
            "1/3 cup sun-dried tomatoes (in oil), chopped",
            "2 cloves garlic, minced",
            "1 tbsp olive oil",
            "1/4 tsp red pepper flakes",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Cook chickpea pasta according to package directions",
            "Sauté garlic and sun-dried tomatoes in olive oil",
            "Add spinach and cook until wilted",
            "Toss pasta with the sautéed mixture",
            "Season with salt, pepper, and red pepper flakes"
        ]
    },
    {
        id: 29,
        name: "Tomato Basil Soup",
        category: "soups",
        image: "🍅",
        description: "Creamy tomato soup with fresh basil and a touch of cream.",
        dietTags: ["vegetarian", "gluten-free"],
        prepTime: "30 min",
        ingredients: [
            "2 lbs tomatoes",
            "1 onion, diced",
            "2 cloves garlic",
            "2 cups vegetable broth",
            "1/4 cup fresh basil",
            "1/2 cup heavy cream",
            "Salt and pepper"
        ],
        instructions: [
            "Sauté onion and garlic until soft.",
            "Add tomatoes and broth, simmer for 20 minutes.",
            "Blend until smooth, then return to pot.",
            "Stir in cream and basil, season to taste."
        ]
    },
    {
        id: 30,
        name: "Chicken Noodle Soup",
        category: "soups",
        image: "🍲",
        description: "Classic comfort soup with chicken, vegetables, and egg noodles.",
        dietTags: ["high-protein"],
        prepTime: "40 min",
        ingredients: [
            "1 lb chicken breast",
            "8 cups chicken broth",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "1 onion, diced",
            "2 cups egg noodles",
            "Fresh herbs"
        ],
        instructions: [
            "Cook chicken in broth until done, then shred.",
            "Add vegetables and simmer until tender.",
            "Add noodles and cook until al dente.",
            "Return chicken to pot and season with herbs."
        ]
    },
    {
        id: 31,
        name: "Roasted Butternut Squash Soup",
        category: "soups",
        image: "🎃",
        description: "Creamy roasted butternut squash soup with warming spices and coconut milk.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "45 min",
        ingredients: [
            "1 large butternut squash, cubed",
            "1 onion, diced",
            "2 apples, peeled and diced",
            "3 cups vegetable broth",
            "1 can coconut milk",
            "1 tsp ground ginger",
            "1/2 tsp cinnamon",
            "2 tbsp olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Roast squash at 400°F for 25 minutes until tender",
            "Sauté onion and apples until soft",
            "Add roasted squash, broth, and spices",
            "Simmer for 15 minutes, then blend until smooth",
            "Stir in coconut milk and season to taste"
        ]
    },
    {
        id: 32,
        name: "Thai Coconut Lentil Soup",
        category: "soups",
        image: "🥥",
        description: "Warming lentil soup with Thai flavors, coconut milk, and fresh herbs.",
        dietTags: ["vegan", "high-protein"],
        prepTime: "30 min",
        ingredients: [
            "1 cup red lentils",
            "1 can coconut milk",
            "2 cups vegetable broth",
            "1 tbsp red curry paste",
            "1 tbsp fresh ginger, minced",
            "2 cloves garlic, minced",
            "1 bell pepper, diced",
            "1/4 cup cilantro",
            "1 lime, juiced"
        ],
        instructions: [
            "Sauté ginger, garlic, and curry paste in oil",
            "Add lentils, coconut milk, and broth",
            "Simmer for 15 minutes until lentils are tender",
            "Add bell pepper and cook 5 more minutes",
            "Finish with cilantro and lime juice"
        ]
    },
    {
        id: 33,
        name: "Creamy Mushroom Soup",
        category: "soups",
        image: "🍄",
        description: "A comforting soup made with mushrooms and cream.",
        dietTags: ["vegetarian", "gluten-free"],
        prepTime: "30 min",
        ingredients: [
            "2 cups mushrooms, sliced",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "2 cups vegetable broth",
            "1/2 cup heavy cream",
            "Salt and pepper"
        ],
        instructions: [
            "Sauté onions, garlic, and mushrooms until soft.",
            "Add broth and simmer for 20 minutes.",
            "Blend until smooth, then stir in cream.",
            "Season and serve warm."
        ]
    },
    {
        id: 34,
        name: "Hearty Vegetable Bean Soup",
        category: "soups",
        image: "🥕",
        description: "A nourishing, fiber-rich soup with a medley of vegetables and white beans.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "35 min",
        ingredients: [
            "1 tbsp olive oil",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "1 zucchini, chopped",
            "1 can white beans, drained and rinsed",
            "4 cups vegetable broth",
            "1 tsp dried thyme",
            "1 bay leaf",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Sauté onion, garlic, carrots, and celery in olive oil until soft",
            "Add zucchini, beans, broth, thyme, and bay leaf",
            "Simmer for 20–25 minutes until vegetables are tender",
            "Season with salt and pepper, remove bay leaf before serving"
        ]
    },
    {
        id: 35,
        name: "Spicy Black Bean Soup",
        category: "soups",
        image: "🌶️",
        description: "A bold and satisfying black bean soup with a hint of spice and lime.",
        dietTags: ["vegan", "high-protein", "gluten-free"],
        prepTime: "30 min",
        ingredients: [
            "1 tbsp olive oil",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 jalapeño, chopped (optional)",
            "2 cans black beans, drained and rinsed",
            "3 cups vegetable broth",
            "1 tsp cumin",
            "1/2 tsp smoked paprika",
            "Juice of 1 lime",
            "Salt and pepper to taste",
            "Fresh cilantro (for garnish)"
        ],
        instructions: [
            "Sauté onion, garlic, and jalapeño in olive oil until soft",
            "Add black beans, broth, cumin, and paprika",
            "Simmer for 15–20 minutes",
            "Blend partially for creamy texture (optional)",
            "Add lime juice, season to taste, and garnish with cilantro"
        ]
    },
    {
        id: 36,
        name: "Grilled Salmon",
        category: "mains",
        image: "🐟",
        description: "Perfectly grilled salmon fillet with asparagus and lemon butter.",
        dietTags: ["high-protein", "gluten-free"],
        prepTime: "25 min",
        ingredients: [
            "2 salmon fillets",
            "1 bunch asparagus",
            "2 tbsp olive oil",
            "2 tbsp butter",
            "1 lemon",
            "Salt and pepper"
        ],
        instructions: [
            "Season salmon with salt and pepper.",
            "Grill salmon for 4-5 minutes per side.",
            "Grill asparagus until tender.",
            "Make lemon butter sauce and drizzle over fish."
        ]
    },
    {
        id: 37,
        name: "Beef Stir Fry",
        category: "mains",
        image: "🥩",
        description: "Quick and flavorful beef stir fry with colorful vegetables.",
        dietTags: ["high-protein"],
        prepTime: "20 min",
        ingredients: [
            "1 lb beef strips",
            "1 bell pepper, sliced",
            "1 onion, sliced",
            "2 cups broccoli florets",
            "3 tbsp soy sauce",
            "1 tbsp sesame oil",
            "2 cloves garlic"
        ],
        instructions: [
            "Stir-fry beef until browned, remove from pan.",
            "Cook vegetables until tender-crisp.",
            "Add beef back to pan with sauce ingredients.",
            "Stir until everything is coated and heated through."
        ]
    },
    {
        id: 38,
        name: "Herb-Crusted Chicken Breast",
        category: "mains",
        image: "🍗",
        description: "Juicy chicken breast with a crispy herb and parmesan crust.",
        dietTags: ["high-protein", "gluten-free"],
        prepTime: "30 min",
        ingredients: [
            "4 chicken breasts",
            "1/2 cup grated Parmesan",
            "1/4 cup fresh herbs (parsley, thyme, rosemary)",
            "2 cloves garlic, minced",
            "2 tbsp olive oil",
            "1 lemon, zested and juiced",
            "Salt and pepper"
        ],
        instructions: [
            "Preheat oven to 400°F",
            "Mix Parmesan, herbs, garlic, and lemon zest",
            "Season chicken with salt and pepper",
            "Brush with olive oil and coat with herb mixture",
            "Bake for 20-25 minutes until internal temp reaches 165°F",
            "Drizzle with lemon juice before serving"
        ]
    },
    {
        id: 39,
        name: "Mediterranean Stuffed Zucchini",
        category: "mains",
        image: "🥒",
        description: "Hollowed zucchini stuffed with quinoa, tomatoes, and Mediterranean herbs.",
        dietTags: ["vegetarian", "gluten-free"],
        prepTime: "35 min",
        ingredients: [
            "4 large zucchini, halved and hollowed",
            "1 cup cooked quinoa",
            "1/2 cup sun-dried tomatoes, chopped",
            "1/2 cup feta cheese, crumbled",
            "1/4 cup pine nuts",
            "2 tbsp fresh basil, chopped",
            "2 tbsp olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Preheat oven to 375°F",
            "Scoop out zucchini flesh, leaving 1/4 inch border",
            "Mix quinoa, tomatoes, feta, pine nuts, and basil",
            "Season with salt and pepper",
            "Stuff zucchini with mixture, drizzle with olive oil",
            "Bake for 25-30 minutes until zucchini is tender"
        ]
    },
    {
        id: 40,
        name: "Baked Turkey Meatballs with Marinara",
        category: "mains",
        image: "🦃",
        description: "Lean turkey meatballs baked to perfection and served with homemade marinara.",
        dietTags: ["high-protein", "gluten-free option"],
        prepTime: "30 min",
        ingredients: [
            "1 lb ground turkey",
            "1/4 cup grated Parmesan",
            "1/4 cup chopped parsley",
            "1 egg",
            "2 cloves garlic, minced",
            "Salt and pepper",
            "2 cups marinara sauce"
        ],
        instructions: [
            "Preheat oven to 400°F",
            "Mix turkey, Parmesan, parsley, egg, garlic, salt, and pepper",
            "Form into small meatballs and place on a baking sheet",
            "Bake for 20 minutes until golden and cooked through",
            "Simmer in marinara sauce for 5–10 minutes before serving"
        ]
    },
    {
        id: 41,
        name: "Chickpea & Sweet Potato Curry",
        category: "mains",
        image: "🍛",
        description: "A hearty plant-based curry with chickpeas, sweet potato, and warming spices.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "35 min",
        ingredients: [
            "1 tbsp coconut oil",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 tbsp curry powder",
            "1 tsp ground cumin",
            "2 cups cubed sweet potato",
            "1 can chickpeas, drained and rinsed",
            "1 can diced tomatoes",
            "1 can coconut milk",
            "Salt and pepper to taste",
            "Fresh cilantro (optional)"
        ],
        instructions: [
            "Sauté onion and garlic in coconut oil until soft",
            "Stir in spices and cook for 1 minute",
            "Add sweet potato, chickpeas, tomatoes, and coconut milk",
            "Simmer for 20–25 minutes until sweet potato is tender",
            "Season to taste and garnish with cilantro"
        ]
    },
    {
        id: 42,
        name: "Lemon Garlic Shrimp with Brown Rice",
        category: "mains",
        image: "🦐",
        description: "Quick and zesty shrimp sautéed in lemon garlic sauce served over brown rice.",
        dietTags: ["high-protein", "gluten-free"],
        prepTime: "20 min",
        ingredients: [
            "1 lb shrimp, peeled and deveined",
            "2 tbsp olive oil",
            "3 cloves garlic, minced",
            "Juice and zest of 1 lemon",
            "1/4 tsp red pepper flakes",
            "2 cups cooked brown rice",
            "Salt and pepper",
            "Fresh parsley (optional)"
        ],
        instructions: [
            "Sauté garlic in olive oil over medium heat",
            "Add shrimp, season with salt, pepper, and red pepper flakes",
            "Cook 2–3 minutes per side until pink and opaque",
            "Add lemon juice and zest, toss to coat",
            "Serve shrimp over warm brown rice and garnish with parsley"
        ]
    },
    {
        id: 43,
        name: "Chocolate Chip Cookies",
        category: "desserts",
        image: "🍪",
        description: "Classic chocolate chip cookies that are crispy outside and chewy inside.",
        dietTags: ["vegetarian"],
        prepTime: "25 min",
        ingredients: [
            "2 1/4 cups flour",
            "1 cup butter",
            "3/4 cup sugar",
            "3/4 cup brown sugar",
            "2 eggs",
            "2 cups chocolate chips",
            "1 tsp vanilla"
        ],
        instructions: [
            "Cream butter and sugars until fluffy.",
            "Add eggs and vanilla, then mix in dry ingredients.",
            "Fold in chocolate chips.",
            "Bake at 375°F for 9-11 minutes."
        ]
    },
    {
        id: 44,
        name: "Dark Chocolate Avocado Mousse",
        category: "desserts",
        image: "🥑",
        description: "Rich and creamy chocolate mousse made with avocado and natural sweeteners.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "10 min",
        ingredients: [
            "2 ripe avocados",
            "1/4 cup cocoa powder",
            "1/4 cup maple syrup",
            "2 tbsp almond butter",
            "1 tsp vanilla extract",
            "Pinch of sea salt",
            "2 tbsp almond milk",
            "Fresh berries for garnish"
        ],
        instructions: [
            "Blend all ingredients except berries until smooth",
            "Adjust sweetness with more maple syrup if needed",
            "Chill in refrigerator for 30 minutes",
            "Serve in small bowls garnished with berries"
        ]
    },
    {
        id: 45,
        name: "Banana Oat Muffins",
        category: "desserts",
        image: "🧁",
        description: "Naturally sweetened muffins made with oats, bananas, and a touch of cinnamon.",
        dietTags: ["vegetarian"],
        prepTime: "30 min",
        ingredients: [
            "2 cups rolled oats",
            "3 ripe bananas, mashed",
            "2 eggs",
            "1/3 cup Greek yogurt",
            "1/4 cup honey",
            "1 tsp cinnamon",
            "1 tsp baking powder",
            "1/2 tsp vanilla extract",
            "1/4 cup chopped walnuts"
        ],
        instructions: [
            "Preheat oven to 350°F and line muffin tin",
            "Blend oats in food processor until flour-like",
            "Mix wet ingredients, then combine with dry ingredients",
            "Fold in walnuts, divide batter among muffin cups",
            "Bake for 18-20 minutes until golden brown"
        ]
    },
    {
        id: 46,
        name: "Coconut Chia Pudding",
        category: "desserts",
        image: "🥥",
        description: "Creamy chia pudding made with coconut milk and topped with tropical fruit.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "10 min (+ chill time)",
        ingredients: [
            "1/2 cup chia seeds",
            "2 cups coconut milk (from a can or carton)",
            "1 tbsp maple syrup",
            "1/2 tsp vanilla extract",
            "1/2 cup diced mango or pineapple"
        ],
        instructions: [
            "Whisk together chia seeds, coconut milk, maple syrup, and vanilla",
            "Let sit for 5 minutes, then stir again to prevent clumping",
            "Cover and refrigerate for at least 4 hours or overnight",
            "Top with tropical fruit before serving"
        ]
    },
    {
        id: 47,
        name: "Baked Cinnamon Apples",
        category: "desserts",
        image: "🍎",
        description: "Warm, tender apples baked with cinnamon and a touch of honey.",
        dietTags: ["vegetarian", "gluten-free"],
        prepTime: "30 min",
        ingredients: [
            "4 apples, cored and sliced",
            "1 tbsp coconut oil or butter",
            "1 tbsp honey or maple syrup",
            "1 tsp cinnamon",
            "1/4 tsp nutmeg",
            "Optional: chopped nuts or raisins"
        ],
        instructions: [
            "Preheat oven to 375°F",
            "Toss apple slices with oil, honey, cinnamon, and nutmeg",
            "Spread in a baking dish and bake for 25–30 minutes",
            "Top with nuts or raisins if desired"
        ]
    },
    {
        id: 48,
        name: "Frozen Yogurt Bark",
        category: "desserts",
        image: "🍦",
        description: "Cool and creamy frozen yogurt bark topped with berries and nuts.",
        dietTags: ["vegetarian", "gluten-free", "high-protein"],
        prepTime: "10 min (+ freeze time)",
        ingredients: [
            "2 cups plain Greek yogurt",
            "2 tbsp honey or maple syrup",
            "1/2 tsp vanilla extract",
            "1/2 cup mixed berries",
            "2 tbsp chopped almonds or pistachios"
        ],
        instructions: [
            "Mix yogurt with honey and vanilla",
            "Spread evenly on a parchment-lined baking sheet",
            "Sprinkle berries and nuts over the top",
            "Freeze for at least 3 hours until firm",
            "Break into pieces and store in the freezer"
        ]
    },
    {
        id: 49,
        name: "Peanut Butter Energy Balls",
        category: "desserts",
        image: "🥜",
        description: "No-bake energy bites made with oats, peanut butter, and dark chocolate.",
        dietTags: ["vegetarian", "gluten-free", "high-protein"],
        prepTime: "10 min",
        ingredients: [
            "1 cup rolled oats",
            "1/2 cup natural peanut butter",
            "1/4 cup honey or maple syrup",
            "1/4 cup ground flaxseed",
            "1/4 cup dark chocolate chips",
            "1/2 tsp vanilla extract",
            "Pinch of salt"
        ],
        instructions: [
            "Combine all ingredients in a bowl and mix until well combined",
            "Chill in refrigerator for 15–20 minutes for easier rolling",
            "Roll into 1-inch balls",
            "Store in an airtight container in the fridge for up to a week"
        ]
    },
    {
        id: 50,
        name: "Trail Mix Energy Bites",
        category: "snacks",
        image: "🥜",
        description: "No-bake energy bites with nuts, dried fruit, and chocolate.",
        dietTags: ["vegetarian", "high-protein"],
        prepTime: "15 min",
        ingredients: [
            "1 cup oats",
            "1/2 cup peanut butter",
            "1/3 cup honey",
            "1/4 cup mini chocolate chips",
            "1/4 cup dried cranberries",
            "1/4 cup chopped nuts",
            "1 tsp vanilla"
        ],
        instructions: [
            "Mix all ingredients in a large bowl.",
            "Chill mixture for 30 minutes.",
            "Roll into 1-inch balls.",
            "Store in refrigerator for up to a week."
        ]
    },
    {
        id: 51,
        name: "Cucumber Hummus Bites",
        category: "snacks",
        image: "🥒",
        description: "Refreshing cucumber rounds topped with creamy hummus and herbs.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "10 min",
        ingredients: [
            "2 large cucumbers, sliced into rounds",
            "1 cup hummus",
            "2 tbsp fresh dill, chopped",
            "1 tbsp olive oil",
            "1 tsp za'atar seasoning",
            "Cherry tomatoes, halved",
            "Sea salt"
        ],
        instructions: [
            "Slice cucumbers into 1/2 inch thick rounds",
            "Top each round with a dollop of hummus",
            "Garnish with dill and cherry tomato half",
            "Drizzle with olive oil and sprinkle za'atar",
            "Season lightly with sea salt"
        ]
    },
    {
        id: 52,
        name: "Apple Cinnamon Energy Balls",
        category: "snacks",
        image: "🍎",
        description: "No-bake energy balls with dried apples, oats, and warming cinnamon spice.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "15 min",
        ingredients: [
            "1 cup rolled oats",
            "1/2 cup dried apples, chopped",
            "1/2 cup almond butter",
            "1/4 cup maple syrup",
            "1 tsp cinnamon",
            "1/4 cup chia seeds",
            "1/4 cup chopped almonds",
            "1 tsp vanilla extract"
        ],
        instructions: [
            "Pulse oats in food processor until coarsely ground",
            "Mix all ingredients in a large bowl",
            "Chill mixture for 30 minutes",
            "Roll into 1-inch balls with wet hands",
            "Store in refrigerator for up to one week"
        ]
    },
    {
        id: 53,
        name: "Roasted Chickpeas",
        category: "snacks",
        image: "🧆",
        description: "Crispy roasted chickpeas with smoky spices—perfect for snacking.",
        dietTags: ["vegan", "gluten-free", "high-protein"],
        prepTime: "35 min",
        ingredients: [
            "1 can chickpeas, drained and rinsed",
            "1 tbsp olive oil",
            "1/2 tsp smoked paprika",
            "1/4 tsp garlic powder",
            "1/4 tsp cumin",
            "Salt to taste"
        ],
        instructions: [
            "Preheat oven to 400°F",
            "Pat chickpeas dry with a paper towel",
            "Toss with olive oil and spices",
            "Spread on baking sheet and roast for 25–30 minutes, shaking halfway through",
            "Let cool before serving"
        ]
    },
    {
        id: 54,
        name: "Greek Yogurt Parfait",
        category: "snacks",
        image: "🍓",
        description: "Layered parfait with Greek yogurt, berries, and crunchy granola.",
        dietTags: ["vegetarian", "high-protein"],
        prepTime: "5 min",
        ingredients: [
            "1 cup plain Greek yogurt",
            "1/2 cup mixed berries",
            "1/4 cup granola",
            "1 tsp honey or maple syrup (optional)",
            "Mint leaves for garnish"
        ],
        instructions: [
            "Layer yogurt, berries, and granola in a glass or jar",
            "Drizzle with honey if desired",
            "Top with mint leaves and serve immediately"
        ]
    },
    {
        id: 55,
        name: "Veggie Sticks with Guacamole",
        category: "snacks",
        image: "🥑",
        description: "Colorful raw vegetables served with creamy homemade guac.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "10 min",
        ingredients: [
            "1 cup baby carrots",
            "1 bell pepper, sliced",
            "1 cucumber, sliced",
            "1 avocado",
            "1 tbsp lime juice",
            "1 tbsp red onion, minced",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Mash avocado with lime juice, red onion, salt, and pepper",
            "Arrange veggie sticks on a plate",
            "Serve with a side of guacamole for dipping"
        ]
    },
    {
        id: 56,
        name: "Rice Cake with Almond Butter & Banana",
        category: "snacks",
        image: "🍌",
        description: "A quick and nutritious snack with whole grains, healthy fats, and natural sweetness.",
        dietTags: ["vegan", "gluten-free"],
        prepTime: "5 min",
        ingredients: [
            "2 brown rice cakes",
            "2 tbsp almond butter",
            "1 banana, sliced",
            "1 tsp chia seeds",
            "Cinnamon for sprinkling"
        ],
        instructions: [
            "Spread almond butter on rice cakes",
            "Top with banana slices",
            "Sprinkle with chia seeds and cinnamon",
            "Serve immediately"
        ]
    }
];

// DOM elements
const recipeGrid = document.getElementById('recipeGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const categoryTitle = document.getElementById('categoryTitle');
const categoryDescription = document.getElementById('categoryDescription');
const recipeModal = document.getElementById('recipeModal');
const modalContent = document.getElementById('modalContent');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Display recipes
function displayRecipes(category = 'all') {
    recipeGrid.innerHTML = '';

    let filteredRecipes = recipes;
    if (category !== 'all') {
        filteredRecipes = recipes.filter(recipe => recipe.category === category);
    }

    // Update category title and description
    if (category === 'all') {
        categoryTitle.textContent = 'All Recipes';
        categoryDescription.textContent = 'Explore our collection of delicious recipes';
    } else {
        const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
        categoryTitle.textContent = categoryName;
        categoryDescription.textContent = `Discover our ${categoryName.toLowerCase()} collection`;
    }

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';

        // Create diet tags HTML
        const dietTagsHTML = recipe.dietTags.map(tag => {
            return `<span class="diet-tag ${tag}">${tag}</span>`;
        }).join('');

        recipeCard.innerHTML = `
            <div class="recipe-image">${recipe.image}</div>
            <div class="recipe-content">
                <div class="recipe-header">
                    <h3>${recipe.name}</h3>
                    <span class="prep-time">${recipe.prepTime}</span>
                </div>
                <div class="diet-tags">${dietTagsHTML}</div>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-buttons">
                    <button class="btn btn-secondary see-ingredients-btn" data-recipe-id="${recipe.id}">See Ingredients</button>
                    <button class="btn btn-primary how-to-btn" data-recipe-id="${recipe.id}">How to do</button>
                </div>
            </div>
        `;

        recipeGrid.appendChild(recipeCard);
    });

    // Add event listeners to the new buttons
    document.querySelectorAll('.see-ingredients-btn').forEach(btn => {
        btn.addEventListener('click', () => showRecipeDetails(btn.dataset.recipeId, 'ingredients'));
    });

    document.querySelectorAll('.how-to-btn').forEach(btn => {
        btn.addEventListener('click', () => showRecipeDetails(btn.dataset.recipeId, 'instructions'));
    });
}

// Show recipe details in modal
function showRecipeDetails(recipeId, tab = 'ingredients') {
    const recipe = recipes.find(r => r.id == recipeId);
    if (!recipe) return;

    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${recipe.name}</h2>
            <button id="closeModal" class="close-btn">&times;</button>
        </div>

        <div class="modal-tabs">
            <button id="ingredientsTab" class="tab-btn ${tab === 'ingredients' ? 'active' : ''}">Ingredients</button>
            <button id="instructionsTab" class="tab-btn ${tab === 'instructions' ? 'active' : ''}">Instructions</button>
        </div>

        <div id="ingredientsContent" class="tab-content ${tab === 'ingredients' ? 'active' : ''}">
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>

        <div id="instructionsContent" class="tab-content ${tab === 'instructions' ? 'active' : ''}">
            <ol class="instructions-list">
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        </div>

        <div class="modal-footer">
            <div class="modal-tags">
                ${recipe.dietTags.map(tag => `<span class="diet-tag ${tag}">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    recipeModal.style.display = 'flex';

    // Add event listeners for modal
    document.getElementById('closeModal').addEventListener('click', () => {
        recipeModal.style.display = 'none';
    });

    document.getElementById('ingredientsTab').addEventListener('click', () => {
        document.getElementById('ingredientsContent').classList.add('active');
        document.getElementById('instructionsContent').classList.remove('active');
        document.getElementById('ingredientsTab').classList.add('active');
        document.getElementById('instructionsTab').classList.remove('active');
    });

    document.getElementById('instructionsTab').addEventListener('click', () => {
        document.getElementById('instructionsContent').classList.add('active');
        document.getElementById('ingredientsContent').classList.remove('active');
        document.getElementById('instructionsTab').classList.add('active');
        document.getElementById('ingredientsTab').classList.remove('active');
    });
}

// Close modal when clicking outside
recipeModal.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        recipeModal.style.display = 'none';
    }
});

// Category button click handlers
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Display recipes for the selected category
        displayRecipes(btn.dataset.category);
    });
});

// Search functionality
function searchRecipes() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (!searchTerm) {
        displayRecipes('all');
        return;
    }

    recipeGrid.innerHTML = '';
    categoryTitle.textContent = 'Search Results';
    categoryDescription.textContent = `Recipes matching "${searchTerm}"`;

    // Remove active class from all category buttons
    categoryBtns.forEach(b => b.classList.remove('active'));

    const filteredRecipes = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.dietTags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
    });

    if (filteredRecipes.length === 0) {
        recipeGrid.innerHTML = `
            <div class="no-results">
                <h3>No recipes found</h3>
                <p>Try different keywords or browse by category</p>
            </div>
        `;
        return;
    }

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';

        // Create diet tags HTML
        const dietTagsHTML = recipe.dietTags.map(tag => {
            return `<span class="diet-tag ${tag}">${tag}</span>`;
        }).join('');

        recipeCard.innerHTML = `
            <div class="recipe-image">${recipe.image}</div>
            <div class="recipe-content">
                <div class="recipe-header">
                    <h3>${recipe.name}</h3>
                    <span class="prep-time">${recipe.prepTime}</span>
                </div>
                <div class="diet-tags">${dietTagsHTML}</div>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-buttons">
                    <button class="btn btn-secondary see-ingredients-btn" data-recipe-id="${recipe.id}">See Ingredients</button>
                    <button class="btn btn-primary how-to-btn" data-recipe-id="${recipe.id}">How to do</button>
                </div>
            </div>
        `;

        recipeGrid.appendChild(recipeCard);
    });

    // Add event listeners to the new buttons
    document.querySelectorAll('.see-ingredients-btn').forEach(btn => {
        btn.addEventListener('click', () => showRecipeDetails(btn.dataset.recipeId, 'ingredients'));
    });

    document.querySelectorAll('.how-to-btn').forEach(btn => {
        btn.addEventListener('click', () => showRecipeDetails(btn.dataset.recipeId, 'instructions'));
    });
}

// Search event listeners
searchBtn.addEventListener('click', searchRecipes);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchRecipes();
    }
});

// Initialize with all recipes
displayRecipes('all');