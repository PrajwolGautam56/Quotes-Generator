const quotes = [
	{
		text: "To see a world in a grain of sand And a heaven in a wild flower To hold infinity in the palm of your hand And eternity in an hour",
		author: "William Blake"
	},
	{	text: "Everything in moderation, including moderation.",
	 	author: "Oscar Wilde"
	},
	{	text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
	 	author: "Nelson Mandela"
	},
	{
		text: "Life is what happens when you're busy making other plans.",
		author: "John Lennon"
	},
	{
		text: "Write books only if you are going to say in them the things you would never dare confide to anyone",
		author: "Emil Cioran"
	},
	{
		text: "Write books only if you are going to say in them the things you would never dare confide to anyone",
		author: "Emil Cioran"
	},
	{
		text: "If you wish to make an apple pie from scratch, you must first invent the universe",
		author: "Carl Sagan"
	},
	{     
			text: "As you walk down the fairway of life you must smell the roses, for you only get to play one round.",
			author: "Ben Hogan"
	},
	{
		text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
		author: "Thomas Edison",
	},
	{ 
		text : " While coming to Earth, each person brings a lantern of aladdin ... but very few people can awaken sleeping monsters from that lamps.",
		author: " Humayun Ahmed "
	},

	{
		text: "You can observe a lot just by watching.",
		author: "Yogi Berra",
	},
	{
		text: "A house divided against itself cannot stand.",
		author: "Abraham Lincoln",
	},
	{
		text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
		author: "Oprah Winfrey"
	},
	{
		text: "Difficulties increase the nearer we get to the goal.",
		author: "Johann Wolfgang von Goethe",
	},
	{
		text: "Fate is in your hands and no one elses",
		author: "Byron Pulsifer",
	},
	{
		text: "Be the chief but never the lord.",
		author: "Lao Tzu",
	},
	{
		text: "Nothing happens unless first we dream.",
		author: "Carl Sandburg",
	},
	{
		text: "Well begun is half done.",
		author: "Aristotle",
	},
	{
		text: "Life is a learning experience, only if you learn.",
		author: "Yogi Berra",
	},
	{
		text: "Self-complacency is fatal to progress.",
		author: "Margaret Sangster",
	},
	{
		text: "Peace comes from within. Do not seek it without.",
		author: "Buddha",
	},
	{
		text: "What you give is what you get.",
		author: "Byron Pulsifer",
	},
	{
		text: "Think how hard physics would be if particles could think",
		author: "Murray Gell-Mann",
    },
	{
		text: "Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
		author: "Lao Tzu",
	},
	{
		text: "If you do not change direction, you may end up where you are heading.",
		author: "Lao Tzu",
	},
	{
		text: "To the mind that is still, the whole universe surrenders.",
		author: "Lao Tzu",
	},
	{
		text: "Nature does not hurry, yet everything is accomplished.",
		author: "Lao Tzu",
	},
	{
		text: "He who does not trust enough, Will not be trusted.",
		author: "Lao Tzu",
	},
	{
		text: "We can only learn to love by loving.",
		author: "Iris Murdoch",
	},
	{
		text: "Life is change. Growth is optional. Choose wisely.",
		author: "Karen Clark",
	},
	{
		text: "You'll see it when you believe it.",
		author: "Wayne Dyer",
	},
	{
		text: "Today is the tomorrow we worried about yesterday.",
		author: null,
	},
	{
		text: "It's easier to see the mistakes on someone else's paper.",
		author: null,
	},
	{
		text: "Every man dies. Not every man really lives.",
		author: null,
	},
	{
		text: "To lead people walk behind them.",
		author: "Lao Tzu",
	},
	{
		text: "Having nothing, nothing can he lose.",
		author: "William Shakespeare",
	},
	{
		text: "Trouble is only opportunity in work clothes.",
		author: "Henry J. Kaiser",
	},
	{
		text: "A rolling stone gathers no moss.",
		author: "Publilius Syrus",
	},
	{
		text: "Ideas are the beginning points of all fortunes.",
		author: "Napoleon Hill",
	},
	{
		text: "Everything in life is luck.",
		author: "Donald Trump",
	},
	{
		text: "Doing nothing is better than being busy doing nothing.",
		author: "Lao Tzu",
	},
	{
		text: "Trust yourself. You know more than you think you do.",
		author: "Benjamin Spock",
	},
	{
		text: "Study the past, if you would divine the future.",
		author: "Confucius",
	},
	{
		text: "The day is already blessed, find peace within it.",
		author: null,
	},
	{
		text: "From error to error one discovers the entire truth.",
		author: "Sigmund Freud",
	},
	{
		text: "Well done is better than well said.",
		author: "Benjamin Franklin",
	},
	{
		text: "Bite off more than you can chew, then chew it.",
		author: "Ella Williams",
	},
	{
		text: "Work out your own salvation. Do not depend on others.",
		author: "Buddha",
	},
	{
		text: "One today is worth two tomorrows.",
		author: "Benjamin Franklin",
	},
	{
		text: "Once you choose hope, anythings possible.",
		author: "Christopher Reeve",
	},
	{
		text: "God always takes the simplest way.",
		author: "Albert Einstein",
	},
	{
		text: "One fails forward toward success.",
		author: "Charles Kettering",
	},
	{
		text: "From small beginnings come great things.",
		author: null,
	},
	{
		text: "Learning is a treasure that will follow its owner everywhere",
		author: "Chinese proverb",
	},
	{
		text: "Be as you wish to seem.",
		author: "Socrates",
	},
	{
		text: "The world is always in movement.",
		author: "V. Naipaul",
	},
	{
		text: "When you have a dream, you've got to grab it and never let go.",
		author: "Carol Burnett",
	},
	{
		text: "There is nothing impossible to they who will try.",
		author: "Alexander the Great",
	},
	{
		text: "Never mistake activity for achievement.",
		author: "John Wooden",
	},
	{
		text: "What worries you masters you.",
		author: "Haddon Robinson",
	},
	{
		text: "One faces the future with ones past.",
		author: "Pearl Buck",
	},
	{
		text: "Goals are the fuel in the furnace of achievement.",
		author: "Brian Tracy",
	},
	{
		text: "Who sows virtue reaps honour.",
		author: "Leonardo da Vinci",
	},
	{
		text: "Be kind whenever possible. It is always possible.",
		author: "Dalai Lama",
	},
	{
		text: "Talk doesn't cook rice.",
		author: "Chinese proverb",
	},
	{
		text: "He is able who thinks he is able.",
		author: "Buddha",
	},
	{
		text: "A goal without a plan is just a wish.",
		author: "Larry Elder",
	},
	{
		text: "To succeed, we must first believe that we can.",
		author: "Michael Korda",
	},
	{
		text: "All endings are also beginnings. We just don't know it at the time.",
		author: "Mitch Albom",
	},
	{
		text: "Learn from yesterday, live for today, hope for tomorrow.",
		author: "Albert Einstein",
	},
	{
		text: "A weed is no more than a flower in disguise.",
		author: "James Lowell",
	},
	{
		text: "Do, or do not. There is no try.",
		author: "Yoda",
	},
	{
		text: "All serious daring starts from within.",
		author: "Harriet Beecher Stowe",
	},
	{
		text: "The best teacher is experience learned from failures.",
		author: "Byron Pulsifer",
	},
	{
		text: "Think how hard physics would be if particles could think.",
		author: "Murray Gell-Mann",
	},
	{
		text: "Love is the flower you've got to let grow.",
		author: "John Lennon",
	},
	{
		text: "Don't wait. The time will never be just right.",
		author: "Napoleon Hill",
	},
	{
		text: "Time is the wisest counsellor of all.",
		author: "Pericles",
	},
	{
		text: "You give before you get.",
		author: "Napoleon Hill",
	},
	{
		text: "Wisdom begins in wonder.",
		author: "Socrates",
	},
	{
		text: "Without courage, wisdom bears no fruit.",
		author: "Baltasar Gracian",
	},
	{
		text: "Change in all things is sweet.",
		author: "Aristotle",
	},
	{
		text: "What you fear is that which requires action to overcome.",
		author: "Byron Pulsifer",
	},
	{
		text: "When performance exceeds ambition, the overlap is called success.",
		author: "Cullen Hightower",
	},
	{
		text: "When deeds speak, words are nothing.",
		author: "African proverb",
	},
	{
		text: "Real magic in relationships means an absence of judgement of others.",
		author: "Wayne Dyer",
	},
	{
		text: "I never think of the future. It comes soon enough.",
		author: "Albert Einstein",
	},
	{
		text: "Skill to do comes of doing.",
		author: "Ralph Emerson",
	},
	{
		text: "Wisdom is the supreme part of happiness.",
		author: "Sophocles",
	},
	{
		text: "I believe that every person is born with talent.",
		author: "Maya Angelou",
	},
	{
		text: "Your mind is for having ideas, not holding them.",
		author: "David Allen",
	},
	{
		text: "Important principles may, and must, be inflexible.",
		author: "Abraham Lincoln",
	},
	{
		text: "The undertaking of a new action brings new strength.",
		author: "Richard Evans",
	},
	{
		text: "The years teach much which the days never know.",
		author: "Ralph Emerson",
	},
	{
		text: "Our distrust is very expensive.",
		author: "Ralph Emerson",
	},
	{
		text: "All know the way; few actually walk it.",
		author: "Bodhidharma",
	},
	{
		text: "Great talent finds happiness in execution.",
		author: "Johann Wolfgang von Goethe",
	},
	{
		text: "Faith in oneself is the best and safest course.",
		author: "Michelangelo",
	},
	{
		text: "Courage is going from failure to failure without losing enthusiasm.",
		author: "Winston Churchill",
	},
	{
		text: "The two most powerful warriors are patience and time.",
		author: "Leo Tolstoy",
	},
	{
		text: "Anticipate the difficult by managing the easy.",
		author: "Lao Tzu",
	},
	{
		text: "Those who are free of resentful thoughts surely find peace.",
		author: "Buddha",
	},
	{
		text: "A short saying often contains much wisdom.",
		author: "Sophocles",
	},
	{
		text: "It takes both sunshine and rain to make a rainbow.",
		author: null,
	},
	{
		text: "A beautiful thing is never perfect.",
		author: null,
	},
	{
		text: "Only do what your heart tells you.",
		author: "Princess Diana",
	},
	{
		text: "Life is movement-we breathe, we eat, we walk, we move!",
		author: "John Pierrakos",
	},
	{
		text: "No one can make you feel inferior without your consent.",
		author: "Eleanor Roosevelt",
	},
	{
		text: "Argue for your limitations, and sure enough theyre yours.",
		author: "Richard Bach",
	},
	{
		text: "Luck is what happens when preparation meets opportunity.",
		author: "Seneca",
	},
	{
		text: "Victory belongs to the most persevering.",
		author: "Napoleon Bonaparte",
	},
	{
		text: "Love all, trust a few, do wrong to none.",
		author: "William Shakespeare",
	},
	{
		text: "In order to win, you must expect to win.",
		author: "Richard Bach",
	},
	{
		text: "A goal is a dream with a deadline.",
		author: "Napoleon Hill",
	},
	{
		text: "You can do it if you believe you can!",
		author: "Napoleon Hill",
	},
	{
		text: "Set your goals high, and don't stop till you get there.",
		author: "Bo Jackson",
	},
	{
		text: "Every new day is another chance to change your life.",
		author: null,
	},
	{
		text: "Smile, breathe, and go slowly.",
		author: "Thich Nhat Hanh",
	},
	{
		text: "Nobody will believe in you unless you believe in yourself.",
		author: "Liberace",
	},
	{
		text: "Do more than dream: work.",
		author: "William Arthur Ward",
	},
	{
		text: "No man was ever wise by chance.",
		author: "Seneca",
	},
	{
		text: "Some pursue happiness, others create it.",
		author: null,
	},
	{
		text: "He that is giddy thinks the world turns round.",
		author: "William Shakespeare",
	},
	{
		text: "Don't ruin the present with the ruined past.",
		author: "Ellen Gilchrist",
	},
	{
		text: "Do something wonderful, people may imitate it.",
		author: "Albert Schweitzer",
	},
	{
		text: "We do what we do because we believe.",
		author: null,
	},
	{
		text: "Do one thing every day that scares you.",
		author: "Eleanor Roosevelt",
	},
	{
		text: "If you cannot be silent be brilliant and thoughtful.",
		author: "Byron Pulsifer",
	},
	{
		text: "Who looks outside, dreams; who looks inside, awakes.",
		author: "Carl Jung",
	},
	{
		text: "What we think, we become.",
		author: "Buddha",
	},
	{
		text: "The shortest answer is doing.",
		author: "Lord Herbert",
	},
	{
		text: "All our knowledge has its origins in our perceptions.",
		author: "Leonardo da Vinci",
	},
	{
		text: "The harder you fall, the higher you bounce.",
		author: null,
	},
	{
		text: "Trusting our intuition often saves us from disaster.",
		author: "Anne Wilson Schaef",
	},
	{
		text: "Truth is powerful and it prevails.",
		author: "Sojourner Truth",
	},
	{
		text: "Light tomorrow with today!",
		author: "Elizabeth Browning",
	},
	{
		text: "Silence is a fence around wisdom.",
		author: "German proverb",
	},
	{
		text: "Society develops wit, but its contemplation alone forms genius.",
		author: "Madame de Stael",
	},
	{
		text: "The simplest things are often the truest.",
		author: "Richard Bach",
	},
	{
		text: "Everyone smiles in the same language.",
		author: null,
	},
	{
		text: "Yesterday I dared to struggle. Today I dare to win.",
		author: "Bernadette Devlin",
	},
	{
		text: "No alibi will save you from accepting the responsibility.",
		author: "Napoleon Hill",
	},
	{
		text: "It is better to travel well than to arrive.",
		author: "Buddha",
	},
	{
		text: "Life shrinks or expands in proportion to one's courage.",
		author: "Anais Nin",
	},
	{
		text: "You have to believe in yourself.",
		author: "Sun Tzu",
	},
	{
		text: "Our intention creates our reality.",
		author: "Wayne Dyer",
	},
	{
		text: "Silence is a true friend who never betrays.",
		author: "Confucius",
	},
	{
		text: "Character develops itself in the stream of life.",
		author: "Johann Wolfgang von Goethe",
	},
	{
		text: "From little acorns mighty oaks do grow.",
		author: "American proverb",
	},
	{
		text: "You can't stop the waves, but you can learn to surf.",
		author: "Jon Kabat-Zinn",
	},
	{
		text: "Reality does not conform to the ideal, but confirms it.",
		author: "Gustave Flaubert",
	},
	{
		text: "Speak low, if you speak love.",
		author: "William Shakespeare",
	},
	{
		text: "A really great talent finds its happiness in execution.",
		author: "Johann Wolfgang von Goethe",
	},
	{
		text: "Reality leaves a lot to the imagination.",
		author: "John Lennon",
	},
	{
		text: "The greatest remedy for anger is delay.",
		author: "Seneca",
	},
	{
		text: "Growth itself contains the germ of happiness.",
		author: "Pearl Buck",
	},
	{
		text: "You can do what's reasonable or you can decide what's possible.",
		author: null,
	},
	{
		text: "he purpose of our lives is to be happy.",
		author: "Dalai Lama",
	},
	{
		text: "Life is what happens when you're busy making other plans.",
		author: "John Lennon",
	},
	{
		text: "Get busy living or get busy dying",
		author: "Stephen King",
	},
	{
		text: "You only live once, but if you do it right, once is enough.",
		author: "Mae West",
	},
	{
		text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
		author: "Thomas Edison",
	},
	{
		text: "If you want to live a happy life, tie it to a goal, not to people or things",
		author: "Albert Einstein",
	},
	{
		text: "Never let the fear of striking out keep you from playing the game.",
		author: "Babe Ruth",
	},
	{
		text: "Money and success don’t change people; they merely amplify what is already there.",
		author: "Will Smith",
	},
	{
		text: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
		author: "Steve Jobs",
	},
	{
		text: 'The journey of a thousand miles begins with one step.',
		author: 'Lao Tzu',
	},
	{
		text: 'That which does not kill us makes us stronger.',
		author: 'Friedrich Nietzsche',
	},
	{
		text: 'Life is what happens when you’re busy making other plans.',
		author: 'John Lennon',
	},
	{
		text: 'When the going gets tough, the tough get going.',
		author: 'Joe Kennedy',
	},
	{
		text: 'You must be the change you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		text: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		text: 'Tough times never last but tough people do.',
		author: 'Robert H. Schuller',
	},
	{
		text: 'Get busy living or get busy dying.',
		author: 'Stephen King',
	},
	{
		text: 'Whether you think you can or you think you can’t, you’re right.',
		author: 'Henry Ford',
	},
	{
		text: 'Tis better to have loved and lost than to have never loved at all.',
		author: 'Alrded Lord Tennyson',
	},
	{
		text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		text: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		text: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		text: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		text: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		text: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		text: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		text: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		text: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		text: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		text: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		text: 'Today is the tomorrow we worried about yesterday.',
		author: null,
	},
	{
		text: "It's easier to see the mistakes on someone else's paper.",
		author: null,
	},
	{
		text: 'Every man dies. Not every man really lives.',
		author: null,
	},
	{
		text: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		text: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		text: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		text: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		text: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		text: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		text: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		text: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		text: 'The day is already blessed, find peace within it.',
		author: null,
	},
	{
		text: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		text: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		text: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		text: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		text: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		text: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		text: 'From small beginnings come great things.',
		author: null,
	},
	{
		text: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		text: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		text: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		text: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		text: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		text: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		text: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		text: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		text: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		text: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
	{
		text: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		text: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		text: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		text: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		text: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		text: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		text: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		text: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		text: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		text: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		text: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		text: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		text: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		text: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		text: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		text: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		text: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		text: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		text: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		text: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		text: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		text: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		text: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		text: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		text: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		text: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		text: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		text: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		text: 'It takes both sunshine and rain to make a rainbow.',
		author: null,
	},
	{
		text: 'A beautiful thing is never perfect.',
		author: null,
	},
	{
		text: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		text: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		text: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		text: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		text: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		text: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		text: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		text: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		text: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
	{
		text: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		text: 'Every new day is another chance to change your life.',
		author: null,
	},
	{
		text: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		text: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		text: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		text: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		text: 'Some pursue happiness, others create it.',
		author: null,
	},
	{
		text: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		text: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		text: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		text: 'We do what we do because we believe.',
		author: null,
	},
	{
		text: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		text: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		text: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		text: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'The harder you fall, the higher you bounce.',
		author: null,
	},
	{
		text: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		text: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		text: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		text: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		text: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		text: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		text: 'Everyone smiles in the same language.',
		author: null,
	},
	{
		text: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		text: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		text: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		text: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		text: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		text: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		text: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		text: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		text: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		text: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		text: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		text: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		text: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		text: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		text: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		text: "You can do what's reasonable or you can decide what's possible.",
		author: null,
	},
	{
		text: "Make your life a dream, and a dream, a reality.",
		author: "Antoine de Saint-Exupéry"
	},
	{
		text: "Music is the langage of emotions.",
		author: "Emmanuel Kant"
	},
	{
		text: "Imagination is more important than knowledge.",
		author: "Albert Einstein"
	},
	{
		text: "If you want peace, prepare for war.",
		author: "Jules César"
	},
	{
		text: "It's the Hell of the poor that makes the Heavens of the Rich.",
		author: "Victor Hugo"
	},
	{
		text: "There is no worst deaf that the ones who do not want to listen.",
		author: "Molière"
	},
	{
		text: "When we want we can, when we can we must.",
		author: "Napoléon Bonaparte"
	},
	{
		text: "I think, therefore I am.",
		author: "René Descartes"
	},
	{
		text: "Anyone who does not know history is doomed to relive it.",
		author: "Karl Marx"
	},
	{
		text: "Promises only bind those who receive them.",
		author: "Jacques Chirac"
	},
	{
		text: "People won't have time for you if you are always angry or complaining.",
		author: "Stephen Hawking"
	},
	{
		text: "Keep your face to the sunshine and you cannot see a shadow.",
		author: "Hellen Keller"
	},
	{
		text: "Sometimes we stare so long at a door that is closing that we see too late the one that is open.",
		author: "Alexander Graham Bell"
	},
	{
    text: "I am always doing that which I cannot do, in order that I may learn how to do it.",
    author: "Pablo Picasso",
	},
	{
		text: "A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.",
		author: "Mahatma Gandhi",
	},
	{
		text: "The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.",
		author: "Viktor E. Frankl",
	},
	{
		text : "First make the change easy (warning: this might be hard), then make the easy change.",
		author : "Kent Beck"
	},
	{
		text : "Before software can be reusable it first has to be usable.", 
		author : "Ralph Johnson"
	},
	{
		text : "If it hurts, do it more frequently, and bring the pain forward.", 
		author : "Jez Humble"
	},
	{
		text : "Good programmers know what to write. Great ones know what to rewrite and reuse.",
		author : "Eric S. Raymond"
	},
	{
		text: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
		author: "Dr. A.P.J Abdul Kalam",
	},
	{
		text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
		author: "Dr. A.P.J Abdul Kalam",
	},
	{
		text: "To succeed in your mission, you must have single-minded devotion to your goal.",
		author: "Dr. A.P.J Abdul Kalam",
	},
	{
    	text: "If you fail, never give up because FAIL means First Attempt In Learning.",
    	author: "Dr. A.P.J Abdul Kalam",
  	},
  	{
    	text: "Creativity is seeing the same thing but thinking differently.",
    	author: "Dr. A.P.J Abdul Kalam",
  	},
  	{
    	text: "Failure will never overtake me if my determination to succeed is strong enough.",
    	author: "Dr. A.P.J Abdul Kalam",
  	},
  	{
    	text: "All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.",
    	author: "Dr. A.P.J Abdul Kalam",
  	},
	{
		text: "Winning isnt everything, but wanting it is.",
		author: "Arnold Palmer"
	},
	{
		text: "You can never cross the ocean unless you have the courage to lose sight of the shore.",
		author: "Christopher Columbus"
	},
	{
		text: "Great sea captains are made in rough waters and deep seas.",
		author: "Kathryn Kuhlman"
	},
	{
		text: "Smooth sea never made a skillful sailor.",
		author: "Anonymous"
	},
	{
		text: "I am always doing that which I cannot do, in order that I may learn how to do it.",
		author: "Pablo Picasso",
	},
	{
		text: "A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.",
		author: "Mahatma Gandhi",
	},
	{
		text: "The greatest weapon against stress is our ability to choose one thought over another.",
		author: "William James",
	},
	{
		text: "The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.",
		author: "Viktor E. Frankl",
	},
	{
		text: "Leadership is hard to define and good leadership even harder. But if you can get people to follow you to the ends of the earth, you are a great leader.",
		author: "Indra Nooyi",
	},
	{
		text: "It isn't what we say or think that defines us, but what we do.",
		author: "Jane Austen",
	},
	{
		text: "There is no charm equal to tenderness of heart.",
		author: "Jane Austen",
	},
	{
		text: "We have all a better guide in ourselves, if we would attend to it, than any other person can be.",
		author: "Jane Austen",
	},
	{
		text: "Evil is not something superhuman, it's something less than human.",
		author: "Agatha Christie",
	},
	{
		text: "It is never too late to be who you might have been.",
		author: "George Elliot",
	},
	{
		text: "Never let the odds keep you from doing what you know in your heart you were meant to do.",
		author: "H. Jackson Brown",
	},
	{
		text: "Success usually comes to those who are too busy looking for it.",
		author: "Henry David Thoreau",
	},
	{
		text: "I never dreamed about success. I worked for it.",
		author: "Estee Lauder",
	},
	{
		text: "Experience is a hard teacher because she gives the test first, the lesson afterwards.",
		author: "Vernon Sanders Law",
	},
	{
		text: "Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.",
		author: "Bruce Lee",
	},
	{
		text: "We all live in a house on fire, no fire department to call, no way out.",
		author: "Tennessee Williams"
	},
	{
		text: "All truths are easy to understand once they are discovered. The point is to discover them.",
		author: "Galileo Galilei"
	},
	{
		text: "Hunting is not a sport. In a sport, both sides should know they're in the game.",
		author: "Paul Rodriguez"
	},
	{
		text: "No matter how dark the moment, love and hope are always possible.",
		author: "George Chakiris"
	},
	{
		text: "All humanity is one undivided and indivisible family. I cannot detach myself from the wickedest soul.",
		author: "Mahatma Gandhi"
	},
	{
		text: "It is a wise father that knows his own child.",
		author: "William Shakespeare"
	},
	{
		text: "Life will knock us down, but we can choose whether or not to stand back up.",
		author: "Jackie Chan"
	},
	{
		text: "Sometimes it takes only one act of kindness and caring to change a person’s life.",
		author: "Jackie Chan"
	},
	{
		text: "Do not let circumstances control you. You change your circumstances.",
		author: "Jackie Chan"
	},
	{
		text: "Being still and doing nothing are two completely different things.",
		author: "Jackie Chan"
	},
	{
		text: "Nothing makes me more determined to succeed than someone telling me something’s impossible.",
		author: "Jackie Chan"
	},
	{
		text: "Family is not who’s blood is in you, is who you love and who loves you.",
		author: "Jackie Chan"
	},
	{
		text: "Why did I become Jackie Chan? Mostly because I work very hard. When people were sleeping, I was still training.",
		author: "Jackie Chan"
	},
	{
		text: "I never wanted to be the next Bruce Lee. I just wanted to be the first Jackie Chan.",
		author: "Jackie Chan"
	},
	{
		text: "I hope next time when we meet, we won’t be fighting each other. Instead we will be drinking tea together.",
		author: "Jackie Chan"
	},
	{
		text: "The best fights are ones we avoid.",
		author: "Jackie Chan"
	},
	{
		text: "I prepare for the worst, but hope for the best.",
		author: "Jackie Chan"
	},
	{
		text: "Don't wait for the change of circumstances. You change the circumstances",
		author: "Jackie Chan"
	},
	{
		text: "You don't get to do over parts or go back and change your path. Your life is decided by your character and the decisions you make in the moment.",
		author: "Jackie Chan"
	},
	{
		text: "I only want my work to make people happy.",
		author: "Jackie Chan"
	},
	{
		text: "If one does not attach himself to people and desires, never shall his heart be broken. But then, does he ever truly live?",
		author: "Jackie Chan"
	},
	{
		text: "Pain is my daily routine. As long as I don’t go to the hospital, it’s nothing for me.",
		author: "Jackie Chan"
	},
	{
		text: "We learn martial arts as helping weakness. You never fight for people to get hurt. You’re always helping people.",
		author: "Jackie Chan"
	},
	{
		text: "Quiet people have the loudest minds.",
		author: "Stephen Hawking"
	},
	{
		text: "Life would be tragic if it weren't funny.",
		author: "Stephen Hawking"
	},
	{
		text: "Intelligence is the ability to adapt to change.",
		author: "Stephen Hawking"
	},
	{
		text: "The universe doesn't allow perfection.",
		author: "Stephen Hawking"
	},
	{
		text: "My goal is simple. It is a complete understanding of the universe, why it is as it is and why it exists at all.",
		author: "Stephen Hawking"
	},
	{
		text: "Although I cannot move and I have to speak through a computer, in my mind I am free",
		author: "Stephen Hawking"
	},
	{
		text: "If time travel is possible, where are the tourists from the future?",
		author: "Stephen Hawking"
	},
	{
		text: "People who boast about their I.Q. are losers.",
		author: "Stephen Hawking"
	},
	{
		text: "The thing about smart people is that they seem like crazy people to dumb people.",
		author: "Stephen Hawking"
	},
	{
		text: "I'm not afraid of death, but I'm in no hurry to die.",
		author: "Stephen Hawking"
	},
	{
		text: "Not only does God play dice but... he sometimes throws them where they cannot be seen.",
		author: "Stephen Hawking"
	},
	{
		text: "I don't think the human race will survive the next thousand years, unless we spread into space.",
		author: "Stephen Hawking"
  	},
  	{
    text: "There is no avoiding war; it can only be postponed to the advantage of others.",
    author: "Niccolo Machiavelli"
  	},
  	{
		text: "Life is trying things to see if they work.",
		author: "Ray Bradbury"
	},
  	{
		text: "Strike me down, and I will become more powerful than you could possibly imagine.",
		author: "Obi-Wan Kenobi"
  	},
  	{
		text: "I'd rather be someone that's underrated than overrated.",
		author: "Clint Dempsey"
	},
  	{
		text: "To live is to choose. But to choose well, you must know who you are and what you stand for, where you want to go and why you want to get there.",
		author: "Kofi Annan"
	},
  	{
		text: "We need to keep hope alive and strive to do better.",
		author: "Kofi Annan"
	},
  	{
    text: "Change is a process which has to be managed.",
    author: "Kofi Annan"
  	},
  	{
		text: "Freedom is not something that one people can bestow on another as a gift. Thy claim it as their own and none can keep it from them.",
		author: "Kwame Nkrumah"
	},
  	{
    text: "Thought without practice is empty; and action without thought is blind.",
    author: "Kwame Nkrumah"
  	},
  	{
		text: "People are worms, and even the God who created them is immensely bored with their antics.",
		author: "Ama Ata Aidoo"
	},
  	{
		text: "When evil men destroy, good men must build and bind.",
		author: "Anas Aremeyaw Anas"
	},
  	{
		text: "The future belongs to those who believe in the beauty of their dreams.",
		author: "John Agyekum Kufuor"
	},
  	{
		text: "All our dreams can come true, if we have the courage to pursue them.",
		author: "John Agyekum Kufuor"
	},
  	{
		text: "Dream as if you'll live forever. Live as if you'll die today.",
		author: "John Agyekum Kufuor"
	},
  	{
		text: "Success is not final, failure is not fatal. It is the courage to continue that counts.",
		author: "Winston Churchill"
  	},
  	{
		text: "Success is not final, failure is not fatal. It is the courage to continue that counts.",
		author: "Winston Churchill"
  	},
  	{
		text: "Never give up on something that you can't go a day without thinking about.",
		author: "Winston Churchill"
  	},
  	{
		text: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
		author: "Dale Carnegie"
  	},
  	{
		text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
		author: "Thomas Edison"
  	},
	{	
		text: "Most people are other people. Their thoughtx are someone else's opinions, their lives a mimicry, their passions a quotation.",
		author: "Oskar Wilde",
	},
	{
		text: "We accept the reality of the world with which we are presented. It's as simple as that.",
		author: "The Truman Show",
	},
	{
		text: "Who kills a man kills a reasonable creature, God's image; but he who destroys a good book, kills reason itself, kills the image of God, as it were, in the eye.",
		author: "John Milton",
	},
	{
		text: "We stopped looking for monsters under our bed when we realised that they were inside us.",
		author: "Charles Darwin",
	},
	{
		text: "Life isn't just about darkness or light, rather it's about finding light within the darkness.",
		author: "Landon Parham",
	},
	{
		text: "I have written you down. Now you will live forever.",
		author: "Bastille",
  	},
  	{
		text: "For sale: baby shoes, never worn.",
		author: "Ernest Hemingway",
	},
	{
		text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
		author: "Martin Luther King Jr.",
	},
	{
		text: "Music is a hogher revelation than all wisdom and philosophy. Music is the electrical soil in which the spirit lives, thinks and invents.",
		author: "Ludwig van Beethoven",
	},
	{
		text: "Children are not colouring books. You don't get to fill them with your favourite colours.",
		author: "Khaled Hosseini",
	},
  {
  	text: "It's not what happens to you, but how you react to it that matters.",
		author: "Epictetus"
	},
  	{
		text: "The only true wisdom is in knowing you know nothing.",
		author: "Socrates"
	},
  	{
		text: "History repeats itself, first as tragedy, second as farce.",
		author: "Karl Marx"
	},
  	{
		text: "To live is to suffer, to survive is to find some meaning in the suffering.",
		author: "Friedrich Nietzsche"
	},
  	{
		text: "It does not matter how slowly you go as long as you do not stop.",
		author: "Confucius"
	},
	{ 
    text: "Be the change that you wish to see in the world.", 
    author: "Mahatma Gandhi" 

 },

  },
    text: "Be the change that you wish to see in the world.", 
    author: "Mahatma Gandhi" 
  },

	{
		text: "I can't hold enough of you in my hands.",
		author: "Franz Kafka",
	},
  	{	
		text: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
		author: "Duchess Meghan"
	},
	{
		text: "I construct my memories with my present.",
		author: "Jean-Paul Sartre"
	},
	{
		text: "I am a man, Jupiter, and each man must invent his own path.",
		author: "Jean-Paul Sartre"
    },
  	{
		text: "We live in a world where people can ridicule you at the push of the button. They can question you at the push of a button.",
		author: "Chadwick Boseman"
	},
  	{
		text: "The only difference between the hero and the villain is that the villain chooses to use that power in a way that is selfish and hurts other people.",
		author: "Chadwick Boseman"
	},
	{
		text:"If someone could only see my actions and not hear my words, what would they say are my priorities?",
		 author:" James Clear"
	},
	{
		text:"We are not given a short life, but we make it short, and we are not ill-supplied but wasteful of it.",
		 author:"Null"
	},
	{
		text:"The way to get started is to quit talking and begin doing.",
		 author:"Walt Disney"
	},
	{
		text:"You only live once - but if you work it right, once is enough.",
		 author:"Joe E. Lewis"
	},
	{
		text:"Fate chooses your relations, you choose your friends.",
		author:"Jacques Delille"
  },
  {
		text: "Never underestimate your problem or your ability to deal with it.",
		author: "Robert Schuller"
	},
	{
		text: "The best prophet of the future is the past.",
		author: "Lord Byron"
	},
	{
		text: "Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you",
		author: "Plato"
	},
	{
		text: "At the touch of love everyone becomes a poet.",
		author: "Plato"
	},
	{
		text: "One word frees us of all the weight and pain in life, that word is Love.",
		author: "Sophocles"
	},
	{
		text: "He who conquers himself is the mightiest warrior.",
		author: "Confucius"
	},
	{
		text: "True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.",
		author: "Socrates"
	},
	{
		text: "What we are today comes from our thoughts of yesterday, and our present thoughts build our life of tomorrow. Our life is the creation of our mind.",
		author: "Gautama Buddha"
	},
	{
		text: "First say to yourself what would you be; and then do what you need to do.",
		author: "Epictetus"
	},
	{
		text: "Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.",
		author: "Plato"
	},
	{
		text: "The more sand had escaped from the hourglass of our life, the clearer we should see through it.",
		author: "Niccolo Machiavelli"
	},
	{
		text: "Everyone is born beautiful, some people just let the world turn them into something ugly.",
		author: "Wiz Khalifa"
	},
	{
		text: "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
		author: "Heraclitus"
	},
	{
		text: "Be Alone,that is the secret of invention;Be Alone,that is when ideas are born.",
		author: "Nikola Tesla"
	},
	{
		text: "And, when you want something, all the universe conspires in helping you to achieve it.",
		author: "Paulo Coelho"
	},
	{
		text: "Remember that wherever your heart is, there you will find your treasure.",
		author: "Paulo Coelho"
	},
	{
		text: "If you are brave enough to say goodbye, life will reward you with a new hello.",
		author: "Paulo Coelho"
	},
	{
		text: "Sometimes you have to travel a long way to find what is near.",
		author: "Paulo Coelho"
	},
	{
		text: "It is what you do in the present that will redeem the past and thereby change the future.",
		author: "Paulo Coelho"
	},
	{
		text: "A life without a cause is a life without effect.",
		author: "Paulo Coelho"
	},
	{
		text: "The danger of an adventure is worth a thousand days of ease and comfort.",
		author: "Paulo Coelho"
	},
	{
		text: "Many People are not wise enough to count life's blessings.They keep focusing instead on what the world has denied them.",
		author: "Amish Tripathi"
	},
	{
		text: "The Purpose is not the desitination but the journey itself. Only those who understand this simple truth can experience true happiness",
		author: "Amish Tripathi"
	},
	{
		text: "If you feel pain,you're human.If you feel other people's pain, you are Human Being",
		author: "Leo Tolstoy"
	},
	{
		text: "A person's ethics and charecter are not tested in good times.It is only in bad times that a person shows how steadfast he is to his dharma",
		author: "Amish Tripathi"
	},
	{
		text: "Everything is easy when you are busy but nothing is easy when you are lazy",
		author: "Swami Vivekananda"
	},
	{
		text: "The greatest sin is to think that you are weak",
		author: "Swami Vivekananda"
	},
	{
		text: "He who struggles is better than he who never attempts",
		author: "Swami Vivekananda"
	},	
	{
		text: "A room without books is like a body without a soul.",
		author: "Marcus Tullius Cicero"
	},
	{
		text: "Whoever is happy will make others happy too",
		Author: "Anne Frank"
	},
  {
		text: "What color is your Bugatti!! ",
		Author: "Andrew Tate"
	},
	{
		text: "When you reach the end of your rope, tie a knot in it and hang on." 
		author: "Franklin D. Roosevelt"
	},
		text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
		Author: "James Cameron"
	},
	{
		text:"The unseen enemy is always the most fearsome.",
		Author: "George R.R. Martin"
	},
	{
		text: "The soul is stronger than its surroundings.", 
		author:"William James" 
	},
	{
		text:"The last of human freedoms—the ability to choose one’s attitude in a given set of circumstances",
		Author:"Viktor E. Frankl"
	},
	{
		text:"We meet no ordinary people in our lives",
		Author:"C.S. Lewis"
	},
	{
		text:"I believe every human has a finite number of heartbeats. I don’t intend to waste any of mine",
		Author:"Neil Armstrong"
	},
	{
		text:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
		Author:"Aristotle"
	},
	{
		text:"Life was meant to be lived, and curiosity must be kept alive. One must never, for whatever reason, turn his back on life",
		Author:"Eleanor Roosevelt"
	},
	{
		text:"The mind is not a vessel to be filled but a fire to be kindled",
		Author:"Plutarch"
	},
	{
		text:"It's the little details that are vital. Little things make big things happen",
		Author:"John Wooden"
	},
	{
		text:"History will be kind to me for I intend to write it",
		Author:"Winston Churchill"
	},
	{
		text:"Mystery creates wonder and wonder is the basis of man’s desire to understand",
		Author:"Neil Armstrong"
	},
	{
		text:"Friends are as companions on a journey, who ought to aid each other to persevere in the road to a happier life",
		Author:"Pythagoras"
	},
	{
		text:"We build too many walls and not enough bridges",
		Author:"Isaac Newton"
	},
	{
		text:"If we all did the things we are capable of, we would literally astound ourselves",
		Author:"Thomas Edison"
	},
	{
		text:"Only those who will risk going too far can possibly find out how far one can go",
		Author:"T.S. Eliot"
	},
	{
		text:"My thoughts disentangle themselves as they pass through my lips and fingertips",
		Author:"Dawson Trotman"
	},
	{
		text:"Before anything else, preparation is the key to success",
		Author:"Alexander Graham Bell"
	},
	{
		text:"“If you want to increase your success rate, double your failure rate",
		Author:"Thomas J. Watson"
	},
	{
		text:"It is during our darkest moments that we must focus to see the light.",
		Author:"Aristotle"
	},
	{
		text:"Peace is not merely a distant goal that we seek, but a means by which we arrive at that goal",
		Author:"Martin Luther King, Jr."
	},
	{
		text:"Peace begins with a smile",
		Author:"Mother Teresa"
	},
	{
		text:"Learning never exhausts the mind",
		Author:"Leonardo da Vinci"

	},
	{
		text:"Tomorrow hopes we have learned something from yesterday",
		Author:"John Wayne"
	},
	{
		text:"Each life is made up of mistakes and learning, waiting and growing, practicing patience and being persistent",
		Author:"Billy Graham"
	},
	{
		text:"Think, think, think",
		Author:"A.A. Milne, Winnie-the-Pooh"
	},
	{
		text:"Change happens in an instant. It happens the moment you DECIDE to change.",
		Author:"Allyson Lewis"
	},
	{
		text:"We meet no ordinary people in our lives.",
		Author:"C.S. Lewis"
	},
	{
		text:"The secret of getting ahead is getting started",
		Author:"Mark Twain"
	},
	{
		text:"If you fell down yesterday, stand up today",
		Author:"H.G. Wells"
	},
	{
		text:"Don’t let others decide who you are",
		Author:"Dennis Rodman"
	},
	{
		text:"If my life is going to mean anything, I have to live it myself",
		Author:"Rick Riordan"
	},
	{
		text:"Courage of the heart is very rare. Let it guide you",
		Author:"Sarah J. Maas"
	},
	{
		text:"Like water, every moment is precious",
		Author:"Michael Bassey Johnson"
	},
	{
		text:"You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you",
		Author:"Walt Disney"
	},
	{
		text:"The foolish man seeks happiness in the distance, the wise grows it under his feet",
		Author:"James Oppenheim"
	},
	{	
    text:"Education is the most powerful weapon which you can use to change the world",
		author: "Nelson Mandela"
	},
  {
    text: "I've noticed that worrying is like praying for what you don't want to happen.",
    author: "Robert Downey Jr."
  },
  {
    text: "The lesson is that you can still make mistakes and be forgiven.",
    author: "Robert Downey Jr."
  },
  {
    text: "Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.",
    author: "Augustine Og Mandino"
  },
	{
     text: "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.",
     author: "Oscar Wilde"
  }
];
