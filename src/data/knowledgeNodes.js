/**
 * knowledgeNodes.js
 * Full pedagogical content for all 12 knowledge nodes.
 * Each node includes: story, explanation, examples, common mistakes,
 * visual analogy, and connection to prior knowledge.
 */

export const KNOWLEDGE_NODES = [
  // ─────────────────────────────────────────────
  // SUBTOPIC 1: Variables & Expressions
  // ─────────────────────────────────────────────
  {
    id: 'K01',
    title: 'Variables & Constants',
    subtopic: 'Variables & Expressions',
    subtopicOrder: 1,
    prerequisites: [],
    emoji: '📦',
    color: '#6C63FF',

    storyHook: `Imagine your friend Alex has a mystery box. You know there are some apples inside,
but you don't know exactly how many. So instead of writing "some unknown number of apples",
mathematicians invented a clever shortcut — they use a letter like x or n to represent it.
That letter is called a VARIABLE. The number of apples is unknown, so x holds its place.
Now, Alex's birthday cake always has exactly 5 candles. That 5 never changes — it's always 5.
That's called a CONSTANT — a number that stays fixed, no matter what.`,

    conceptExplanation: [
      {
        point: 'What is a Variable?',
        detail: `A variable is a letter (like x, y, a, n) used to represent a number we don't know yet.
Think of it as a labelled empty box — we know the box exists, but we haven't looked inside.
Variables are the fundamental building block of all algebra.`,
      },
      {
        point: 'What is a Constant?',
        detail: `A constant is a number with a fixed, unchanging value. In the expression x + 5,
the number 5 is a constant — it will always be 5, no matter what x turns out to be.
Think of it as a "locked-in" number.`,
      },
      {
        point: 'Why Do We Need Variables?',
        detail: `Variables let us write general rules. Instead of saying "3 + 3 = 6" AND "5 + 5 = 10"
AND "100 + 100 = 200"... we can just write "n + n = 2n" to cover ALL cases at once.
This is the superpower of algebra.`,
      },
    ],

    workedExamples: [
      {
        problem: 'Identify the variable and constant in: 14 − 3y',
        steps: [
          'Scan the expression. Letters are variables, plain numbers are constants.',
          'The letter y is our variable — it represents an unknown number.',
          '14 and 3 are constants — they are fixed numbers.',
          'Note: 3 is attached to y (making it a coefficient — we\'ll learn that next!)',
        ],
        answer: 'Variable: y | Constants: 14 and 3',
      },
      {
        problem: 'In the expression 7 + a − 2, which parts are variables and which are constants?',
        steps: [
          '7 is a plain number → constant',
          'a is a letter → variable',
          '2 is a plain number → constant',
        ],
        answer: 'Variable: a | Constants: 7 and 2',
      },
      {
        problem: 'Write an expression for: "A number increased by 9"',
        steps: [
          '"A number" means we don\'t know it → use a variable, say n',
          '"Increased by 9" means we add 9',
          'Write: n + 9',
        ],
        answer: 'n + 9  (or any other letter + 9)',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Thinking coefficients are variables',
        example: 'In 3y, students sometimes say "3 is the variable"',
        why: 'The number 3 is attached to the letter, but it\'s a fixed number — the LETTER y is what we don\'t know.',
        fix: 'Ask yourself: "Is this a letter?" If yes → variable. If no → constant or coefficient.',
      },
      {
        mistake: 'Thinking variables must be x',
        example: 'Some students write "there\'s no variable" when they see n or t',
        why: 'Any letter can be a variable. x is just popular. Mathematics is flexible.',
        fix: 'Remember: any letter (a through z) can serve as a variable.',
      },
    ],

    visualAnalogy: `Picture a parking space. The space itself is always there (constant — it doesn't change),
but the car parked inside changes every day (variable — the unknown). The SPACE is the label,
and the CAR is the value that fills it. Variables work the same way.`,

    connectionToPrior: `This is your very first step into algebra. Everything we build — expressions, equations,
solving problems — starts with understanding that letters can stand for unknown numbers.`,
  },

  {
    id: 'K02',
    title: 'Coefficients & Terms',
    subtopic: 'Variables & Expressions',
    subtopicOrder: 2,
    prerequisites: ['K01'],
    emoji: '🔢',
    color: '#FF6584',

    storyHook: `Imagine you're at a fruit shop. You see "3 bags of apples". Here, "bags of apples"
is the thing you have (the variable part), and "3" tells you HOW MANY bags you have.
That number "3" is the COEFFICIENT — it multiplies the variable.
Now, the whole phrase "3 bags of apples" is one TERM. And "7 oranges" is a different term.
Terms are the separate parts of an algebraic expression, divided by + or − signs.`,

    conceptExplanation: [
      {
        point: 'What is a Term?',
        detail: `A term is a single mathematical unit — it can be a number, a variable, or a number × variable.
Terms are separated by + or − signs.
In 4x − 2y + 7: we have THREE terms: 4x, −2y, and 7.`,
      },
      {
        point: 'What is a Coefficient?',
        detail: `A coefficient is the number that multiplies a variable in a term.
In 5x, the coefficient is 5. In −3y, the coefficient is −3.
Crucially: in just "x" with no visible number, the coefficient is 1 (we write 1·x = x but skip the 1).`,
      },
      {
        point: 'The Invisible 1',
        detail: `This is one of algebra's sneakiest tricks: when you write just x, you really mean 1x.
The coefficient 1 is there — it's just invisible. This matters enormously when simplifying.
y means 1y. −z means −1z.`,
      },
    ],

    workedExamples: [
      {
        problem: 'In 4y − 3, identify: number of terms, coefficient of y, and the constant term.',
        steps: [
          'Count terms: 4y and −3 → TWO terms',
          'The coefficient of y in term 4y is 4',
          '−3 has no variable → it is the constant term',
        ],
        answer: '2 terms | Coefficient of y = 4 | Constant term = −3',
      },
      {
        problem: 'What is the coefficient of x in: x + 7?',
        steps: [
          'The term with x is just: x',
          'No number is written in front of x',
          'Invisible rule: x = 1·x, so coefficient = 1',
        ],
        answer: 'Coefficient = 1 (the invisible one!)',
      },
      {
        problem: 'List all terms in: 6a + b − 4c − 9',
        steps: [
          'Split at + and − signs (keeping the sign with each term)',
          'Term 1: 6a (coeff = 6)',
          'Term 2: +b (coeff = 1, invisible)',
          'Term 3: −4c (coeff = −4)',
          'Term 4: −9 (constant term)',
        ],
        answer: 'Four terms: 6a, b, −4c, −9',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Assuming coefficient of x is 0',
        example: 'In x + 7, saying "x has no coefficient" or "coefficient = 0"',
        why: 'Students confuse "not written" with "zero". But 0·x = 0, which is different from x.',
        fix: 'No visible number in front of a variable → coefficient is 1, not 0.',
      },
      {
        mistake: 'Forgetting the sign belongs to the term',
        example: 'In 5a − 3b, treating 3b as positive',
        why: 'The minus sign belongs to the TERM that follows it.',
        fix: 'Always attach the sign to its term: −3b is a negative term.',
      },
    ],

    visualAnalogy: `Think of terms like items on a shopping list: "3 bags of flour, 1 bottle of milk, 2 eggs".
Each item is a separate "term". The NUMBER of each item (3, 1, 2) is its coefficient.
You wouldn't add flour and eggs together — they're different things!`,

    connectionToPrior: `In K01 we learned variables are letters for unknowns. Now we see that variables
can have numbers multiplied with them (coefficients) and that expressions are built from
separate building blocks called terms.`,
  },

  // ─────────────────────────────────────────────
  // SUBTOPIC 2: Evaluating & Simplifying
  // ─────────────────────────────────────────────
  {
    id: 'K03',
    title: 'Evaluating Expressions',
    subtopic: 'Evaluating & Simplifying',
    subtopicOrder: 1,
    prerequisites: ['K01', 'K02'],
    emoji: '🔍',
    color: '#43C6AC',

    storyHook: `You're a chef following a recipe. The recipe says: "Use n cups of flour, plus 2 cups of sugar."
Normally, n is unknown. But today, the head chef says "n = 3 cups." Now you can evaluate —
you substitute 3 for n and calculate: 3 + 2 = 5 cups total.
Evaluating an expression means substituting a known value for the variable and computing the result.`,

    conceptExplanation: [
      {
        point: 'What Does "Evaluate" Mean?',
        detail: `To evaluate an expression means to replace each variable with a given number,
then calculate the result using the order of operations (PEMDAS/BODMAS).
It's like "plugging in" a value to get a concrete answer.`,
      },
      {
        point: 'The Order of Operations (PEMDAS)',
        detail: `When evaluating, you MUST follow this order:
P — Parentheses first
E — Exponents
M/D — Multiply and Divide (left to right)
A/S — Add and Subtract (left to right)
Skipping this order is the most common source of errors in evaluation.`,
      },
      {
        point: 'Substitution Technique',
        detail: `Step 1: Write the expression.
Step 2: Replace every variable with its given value (use parentheses to be safe).
Step 3: Compute step by step using PEMDAS.
The parentheses trick: replace x with (3), not just 3, to avoid sign errors.`,
      },
    ],

    workedExamples: [
      {
        problem: 'Evaluate 4a − 2 when a = 3',
        steps: [
          'Write expression: 4a − 2',
          'Replace a with (3): 4(3) − 2',
          'Multiply first (PEMDAS): 12 − 2',
          'Subtract: 10',
        ],
        answer: '10',
      },
      {
        problem: 'Evaluate 2m + 1 when m = 5',
        steps: [
          'Replace m with (5): 2(5) + 1',
          'Multiply: 10 + 1',
          'Add: 11',
        ],
        answer: '11',
      },
      {
        problem: 'Evaluate 3x² − x + 4 when x = 2',
        steps: [
          'Replace x with (2): 3(2)² − (2) + 4',
          'Exponents first: 3(4) − 2 + 4',
          'Multiply: 12 − 2 + 4',
          'Left to right: 10 + 4 = 14',
        ],
        answer: '14',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Adding before multiplying',
        example: 'For 4a − 2 with a=3: doing 4−2 first = 2, then 2×3 = 6 (WRONG)',
        why: 'Students work left-to-right like reading, ignoring PEMDAS.',
        fix: 'Always multiply/divide before adding/subtracting. Multiplication is "stickier" than addition.',
      },
      {
        mistake: 'Forgetting parentheses when substituting negative values',
        example: 'Replacing x with −3 in 2x²: writing 2·−3² instead of 2·(−3)²',
        why: 'Without parentheses, the square only applies to 3, not −3.',
        fix: 'Always wrap substituted values in parentheses: 2(−3)².',
      },
    ],

    visualAnalogy: `Think of an expression as a vending machine formula. You put in a coin (the value of x),
and the machine processes it through its formula to give you a snack (the result).
PEMDAS is the internal wiring that tells the machine what to do in what order.`,

    connectionToPrior: `We now know what variables (K01) and coefficients/terms (K02) are.
Evaluating takes us to the next level: we can CALCULATE the value of an expression
once we know what the variable equals.`,
  },

  {
    id: 'K04',
    title: 'Like Terms',
    subtopic: 'Evaluating & Simplifying',
    subtopicOrder: 2,
    prerequisites: ['K02'],
    emoji: '🍎',
    color: '#F7971E',

    storyHook: `Imagine sorting your Halloween candy. You put all the chocolate bars together,
all the gummies together, and all the lollipops together. You can COUNT chocolates
(3 chocolates + 4 chocolates = 7 chocolates), but you CAN'T add "3 chocolates + 2 gummies"
into a single type — they're different things!
In algebra, this is EXACTLY what "like terms" means. You can only combine terms
that are the same "type" — same variable with the same exponent.`,

    conceptExplanation: [
      {
        point: 'What Makes Two Terms "Like"?',
        detail: `Two terms are like terms if and only if:
1. They have EXACTLY the same variable(s)
2. AND those variables are raised to EXACTLY the same power (exponent)
The coefficients can be different — that doesn't matter.
Examples: 3x and −7x are like terms. 3x and 3x² are NOT (different powers). 3x and 3y are NOT (different variables).`,
      },
      {
        point: 'Common Like Term Pairs',
        detail: `Like terms: 5x and −2x (both just x)
Like terms: 4x² and 9x² (both x-squared)
Like terms: 7 and −3 (both constants — no variable)
NOT like: x and x² (different powers)
NOT like: 2xy and 2x (different variable combinations)`,
      },
      {
        point: 'Why This Matters',
        detail: `Understanding like terms is the gatekeeper to simplifying expressions (K05).
If you incorrectly combine unlike terms, your whole simplification will be wrong.
This is one of the most tested skills in algebra — expect to see it constantly.`,
      },
    ],

    workedExamples: [
      {
        problem: 'Which of these are like terms: 5x², −2x², 3x, 5y²?',
        steps: [
          '5x² and −2x²: same variable x, same power 2 → LIKE TERMS ✓',
          '5x² and 3x: same variable x, but different powers (2 vs 1) → NOT like',
          '5x² and 5y²: same power 2, but different variables (x vs y) → NOT like',
          '3x is alone — no other term matches x¹',
        ],
        answer: '5x² and −2x² are like terms. 3x and 5y² stand alone.',
      },
      {
        problem: 'Group the like terms in: 3a + 2b − a + 5b − 4',
        steps: [
          'Terms with a: 3a and −a → like',
          'Terms with b: 2b and 5b → like',
          'Constants: −4 → alone',
          'Group: (3a − a) + (2b + 5b) + (−4)',
        ],
        answer: 'Group a-terms, b-terms, and constants separately',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Ignoring the exponent',
        example: 'Treating 5x and 5x² as like terms because "they both have x"',
        why: 'x and x² are fundamentally different quantities (compare: 2 vs 4, or 3 vs 9).',
        fix: 'Check BOTH the letter AND the tiny superscript number.',
      },
      {
        mistake: 'Treating xy and x as like terms',
        example: 'In 3xy + 2x, trying to combine them',
        why: 'xy involves two variables multiplied; x involves only one.',
        fix: 'Every variable in the term must match exactly.',
      },
    ],

    visualAnalogy: `Like terms are like matching socks. To pair socks, they must match in COLOUR (the variable)
AND SIZE (the exponent). A red small sock and a red large sock don't pair — wrong size!
A red sock and a blue sock don't pair — wrong colour!`,

    connectionToPrior: `In K02 we learned what terms and coefficients are.
Now we can classify which terms are "matchable" — a crucial step before we can simplify.`,
  },

  // ─────────────────────────────────────────────
  // SUBTOPIC 3: Simplifying & Expressions vs Equations
  // ─────────────────────────────────────────────
  {
    id: 'K05',
    title: 'Simplifying Expressions',
    subtopic: 'Simplifying & Structure',
    subtopicOrder: 1,
    prerequisites: ['K04'],
    emoji: '✨',
    color: '#A8EDEA',

    storyHook: `Your bedroom is messy: 3 books on the desk, 2 books on the floor, 1 book on the chair,
plus 5 pencils scattered around and 2 pencils in a cup.
Cleaning up means putting like things together: 3+2+1 = 6 books in one pile,
5+2 = 7 pencils in another. You can't mix books and pencils.
Simplifying algebraic expressions works EXACTLY the same way.`,

    conceptExplanation: [
      {
        point: 'How to Simplify',
        detail: `Simplifying means combining all like terms to make the expression as compact as possible.
Process:
1. Identify all like term groups
2. For each group, ADD or SUBTRACT the coefficients
3. Keep the variable part unchanged
4. Write out the simplified result`,
      },
      {
        point: 'Adding Coefficients of Like Terms',
        detail: `If you have 3m and 2m:
→ Coefficients are 3 and 2
→ Add them: 3 + 2 = 5
→ Keep the variable: m
→ Result: 5m
The variable part never changes when you simplify — only the coefficient does.`,
      },
      {
        point: 'Distributing Before Simplifying (Brackets)',
        detail: `If there's a bracket like 2(3x + 4), expand first before combining like terms:
2(3x + 4) = 6x + 8
Then combine any like terms that appear.`,
      },
    ],

    workedExamples: [
      {
        problem: 'Simplify: 4a + 2a − a',
        steps: [
          'All three terms are like terms (all "a")',
          'Add/subtract coefficients: 4 + 2 − 1 = 5',
          'Note: −a means −1a, so coefficient is −1',
          'Result: 5a',
        ],
        answer: '5a',
      },
      {
        problem: 'Simplify: 3m + 4n − m + 2n',
        steps: [
          'm-terms: 3m − m = (3−1)m = 2m',
          'n-terms: 4n + 2n = (4+2)n = 6n',
          'Combine results',
        ],
        answer: '2m + 6n',
      },
      {
        problem: 'Simplify: 5x² + 3x − 2x² + x − 4',
        steps: [
          'x²-terms: 5x² − 2x² = 3x²',
          'x-terms: 3x + x = 3x + 1x = 4x',
          'Constant: −4 (no like term, stays)',
          'Combine',
        ],
        answer: '3x² + 4x − 4',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Combining unlike terms',
        example: 'Writing 3m + 4n = 7mn (WRONG — you cannot add apples and oranges)',
        why: 'Students rush and add all numbers they see, ignoring variable differences.',
        fix: 'Only add coefficients when variable parts are IDENTICAL.',
      },
      {
        mistake: 'Losing the negative sign',
        example: 'Simplifying 5x − 3x as 5x + 3x = 8x instead of 5x − 3x = 2x',
        why: 'The minus sign belongs to the term. −3x has a coefficient of −3.',
        fix: 'Rewrite using explicit negative coefficients: 5x + (−3x) = 2x.',
      },
    ],

    visualAnalogy: `Simplifying is like a piggy bank: you can count all your quarters together,
all your dimes together, but you can't add 3 quarters + 2 dimes = "5 something".
They stay as separate denominations (unlike terms) until you decide a common unit.`,

    connectionToPrior: `K04 taught us to IDENTIFY like terms. K05 is the action step: we COMBINE them.
Together these two nodes let us transform messy, complex expressions into clean, simple ones.`,
  },

  {
    id: 'K06',
    title: 'Expressions vs Equations',
    subtopic: 'Simplifying & Structure',
    subtopicOrder: 2,
    prerequisites: ['K03', 'K05', 'K14'],
    emoji: '⚖️',
    color: '#667eea',

    storyHook: `In English, "three plus five" is a PHRASE — it doesn't say anything complete.
But "three plus five equals eight" is a full SENTENCE — it makes a statement.
In algebra, an EXPRESSION is like a phrase (it has no equals sign, makes no claim).
An EQUATION is like a sentence (it HAS an equals sign and claims two sides are equal).
This difference is HUGE — equations can be SOLVED; expressions can only be simplified.`,

    conceptExplanation: [
      {
        point: 'Expressions: Algebraic Phrases',
        detail: `An expression is a combination of variables, numbers, and operations — but NO equals sign.
Examples: 2x + 1 | 3a² − 5 | 7 + y
You can evaluate expressions (plug in values) or simplify them.
You CANNOT "solve" an expression because it makes no claim about equality.`,
      },
      {
        point: 'Equations: Algebraic Sentences',
        detail: `An equation is a statement that two expressions are equal, connected by "=".
Examples: 2x + 1 = 9 | 3a² − 5 = 22 | y + 7 = 15
Equations can be SOLVED — you can find the value of x that makes the statement true.
The equals sign is the pivotal operator that changes everything.`,
      },
      {
        point: 'Solution vs Value',
        detail: `Expression 2x + 1: if x = 4, the VALUE is 9. Different x gives a different value.
Equation 2x + 1 = 9: only ONE value of x makes it TRUE (x = 4). That's the SOLUTION.
This is why equations are so powerful — they let us find specific unknown values.`,
      },
    ],

    workedExamples: [
      {
        problem: 'Classify each: (a) 3x + 2  (b) 3x + 2 = 8  (c) y² − 4y  (d) y = 3',
        steps: [
          '(a) 3x + 2: no equals sign → EXPRESSION',
          '(b) 3x + 2 = 8: has = sign → EQUATION',
          '(c) y² − 4y: no equals sign → EXPRESSION',
          '(d) y = 3: has = sign → EQUATION',
        ],
        answer: 'Expressions: (a) and (c). Equations: (b) and (d).',
      },
      {
        problem: 'Is 2x + 3 = 2x + 3 an equation? Can it be solved?',
        steps: [
          'It has an = sign, so yes — it\'s an equation',
          'But it\'s TRUE for every value of x (identity)',
          'Try x=0: 3=3 ✓. Try x=5: 13=13 ✓',
          'This is a special type: an IDENTITY (always true)',
        ],
        answer: 'Yes, it\'s an equation (an identity — true for all x)',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Trying to "solve" an expression',
        example: '"Solve: 3x + 4" — this makes no sense without an equals sign',
        why: 'Students confuse simplifying with solving.',
        fix: 'No equals sign = expression = can only simplify or evaluate, not solve.',
      },
      {
        mistake: 'Forgetting that the = sign must be preserved in equations',
        example: 'When simplifying an equation, dropping the = and losing one side',
        why: 'Algebraic work can drift; students focus on one side.',
        fix: 'Always write both sides with = between them in every step.',
      },
    ],

    visualAnalogy: `A PHRASE: "five hungry lions" — says something but doesn't claim anything true or false.
A SENTENCE: "five hungry lions ate the zebra" — makes a specific claim.
An expression is a mathematical phrase. An equation is a mathematical sentence.`,

    connectionToPrior: `We've been working with expressions (K01–K05). Now we understand the difference
between expressions and equations — setting us up perfectly for the equation-solving
concepts ahead (K07–K12).`,
  },

  // ─────────────────────────────────────────────
  // SUBTOPIC 4: Solving Equations
  // ─────────────────────────────────────────────
  {
    id: 'K07',
    title: 'The Balance Principle',
    subtopic: 'Solving Equations',
    subtopicOrder: 1,
    prerequisites: ['K06', 'K15'],
    emoji: '⚖️',
    color: '#f093fb',

    storyHook: `Imagine a perfectly balanced seesaw with two children of equal weight.
If one child gains 3 kg (adds weight to the left), the seesaw tips.
To RE-BALANCE it, the other child must ALSO gain exactly 3 kg (add to the right).
An equation is like that balanced seesaw. The = sign is the pivot.
Whatever operation you perform on one side, you MUST perform the identical operation on the other side to keep the balance.`,

    conceptExplanation: [
      {
        point: 'The Golden Rule of Equation Solving',
        detail: `Any mathematical operation you apply to one side of an equation
MUST be applied identically to the other side.
This is not a trick — it's a fundamental property of equality.
If A = B, then A + c = B + c for any c. Also A × c = B × c.`,
      },
      {
        point: 'Why the Balance Principle Works',
        detail: `The equals sign says "these two expressions have the same value."
If you change one side without changing the other, you break that equality.
By doing the same thing to both sides, you create a NEW equality that is just as valid.
This is how we "peel away" operations to isolate the variable.`,
      },
      {
        point: 'Visualising Equations as Scales',
        detail: `Left pan = left side of equation
Right pan = right side of equation
Both pans are level = the equation is balanced (true)
Our goal in solving: keep the scale balanced while getting the variable alone on one side.`,
      },
    ],

    workedExamples: [
      {
        problem: 'If x = 5, show that x + 3 = 8 remains balanced',
        steps: [
          'Start: x = 5 (balanced at 5 = 5)',
          'Add 3 to LEFT side: x + 3',
          'MUST add 3 to RIGHT side: 5 + 3 = 8',
          'New equation: x + 3 = 8 (still balanced)',
        ],
        answer: 'Both sides increased by 3, so equality is maintained.',
      },
      {
        problem: 'I do "× 4" to the left side of an equation. What must I do to the right?',
        steps: [
          'Operation: multiply by 4',
          'Balance principle: same operation to both sides',
          'Must multiply right side by 4 too',
        ],
        answer: 'Multiply the right side by 4 as well.',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Applying inverse operation instead of same operation',
        example: 'Adding 5 to left → subtracting 5 from right',
        why: 'Students confuse "balance" with "opposites". Opposites come later (for isolating variables).',
        fix: 'Balance principle = SAME operation to both sides, not opposite.',
      },
      {
        mistake: 'Only operating on the variable term, not the whole side',
        example: 'In x + 4 = 10, subtracting 4 from x only: getting just x = 10',
        why: 'Students forget the right side must also change.',
        fix: 'The entire right side must receive the same operation.',
      },
    ],

    visualAnalogy: `It's like a law of fairness: if you give one twin a gift, you must give the other twin the same gift.
The equation is the fairness agreement. The = sign is the social contract. Treat both sides exactly the same.`,

    connectionToPrior: `K06 showed us what equations ARE. K07 gives us the fundamental TOOL for solving them.
Every technique for solving equations (K08–K11) is just an application of this balance principle.`,
  },

  {
    id: 'K08',
    title: 'Inverse Operations — Addition & Subtraction',
    subtopic: 'Solving Equations',
    subtopicOrder: 2,
    prerequisites: ['K07'],
    emoji: '➕➖',
    color: '#4facfe',

    storyHook: `Detective Maya found a locked box. Written on it: "Take 7 apples, add them to what's inside, and you get 15."
To find out what's inside, Maya needs to UNDO the addition of 7.
The opposite (inverse) of adding 7 is subtracting 7.
So she subtracts 7 from both sides: 15 − 7 = 8. The box had 8 apples.
In algebra: x + 7 = 15 → subtract 7 from both sides → x = 8. Same logic!`,

    conceptExplanation: [
      {
        point: 'What Is an Inverse Operation?',
        detail: `Every operation has an opposite that "undoes" it:
Addition ↔ Subtraction
Multiplication ↔ Division
Inverse operations are the key to isolating variables in equations.
We use the inverse to "cancel" the operation surrounding the variable.`,
      },
      {
        point: 'Solving x + a = b (Addition Equations)',
        detail: `If x has a number added to it, subtract that number from both sides.
Example: x + 7 = 15
→ Subtract 7 from both sides
→ x + 7 − 7 = 15 − 7
→ x = 8
The +7 and −7 cancel each other out, leaving x alone.`,
      },
      {
        point: 'Solving x − a = b (Subtraction Equations)',
        detail: `If x has a number subtracted from it, add that number to both sides.
Example: y − 4 = 10
→ Add 4 to both sides
→ y − 4 + 4 = 10 + 4
→ y = 14
The −4 and +4 cancel out.`,
      },
    ],

    workedExamples: [
      {
        problem: 'Solve: x + 7 = 15',
        steps: [
          'Goal: get x alone',
          'x has +7: inverse is −7',
          'Subtract 7 from both sides: x + 7 − 7 = 15 − 7',
          'Left: x + 0 = x. Right: 8',
          'x = 8',
        ],
        answer: 'x = 8',
      },
      {
        problem: 'Solve: y − 4 = 10',
        steps: [
          'y has −4: inverse is +4',
          'Add 4 to both sides: y − 4 + 4 = 10 + 4',
          'Left: y. Right: 14',
          'y = 14',
        ],
        answer: 'y = 14',
      },
      {
        problem: 'Solve: 13 = m + 5',
        steps: [
          'Equation is the same even when written backwards',
          'Variable m has +5: subtract 5 from both sides',
          '13 − 5 = m + 5 − 5',
          '8 = m → m = 8',
        ],
        answer: 'm = 8',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Adding instead of subtracting (sign error)',
        example: 'Solving x + 7 = 15 by adding 7: x = 15 + 7 = 22 (WRONG)',
        why: 'Students see +7 and instinctively add instead of doing the inverse.',
        fix: 'The operation on the variable tells you to do the OPPOSITE. +7 → subtract 7.',
      },
      {
        mistake: 'Only changing one side',
        example: 'x + 7 = 15 → x = 15 (dropped the 7, forgot to subtract from right)',
        why: 'Rushing — students remove the number from the variable but forget the right side.',
        fix: 'Always write the full step: subtract 7 from BOTH sides explicitly.',
      },
    ],

    visualAnalogy: `Think of an equation like a locked safe combination. To open it, you turn the dial
the OPPOSITE way. Addition locked it → subtraction opens it. Subtraction locked it → addition opens it.
The inverse is always the "key" that matches the operation used.`,

    connectionToPrior: `The balance principle (K07) told us to do the same to both sides.
Now we apply it specifically: we choose to subtract/add the INVERSE of what's on the variable
to isolate it — the most crucial step in equation solving.`,
  },

  {
    id: 'K09',
    title: 'Inverse Operations — Multiplication & Division',
    subtopic: 'Solving Equations',
    subtopicOrder: 3,
    prerequisites: ['K07'],
    emoji: '✖️➗',
    color: '#fa709a',

    storyHook: `Three identical treasure chests, each with the same unknown number of coins inside.
Together they have 15 coins total. How many in each chest?
If 3 chests × (coins per chest) = 15, we divide both sides by 3: 15 ÷ 3 = 5 coins per chest.
In algebra: 3z = 15 → divide both sides by 3 → z = 5. Division UNDOES multiplication.`,

    conceptExplanation: [
      {
        point: 'Solving ax = b (Multiplication Equations)',
        detail: `If a variable is multiplied by a coefficient, divide both sides by that coefficient.
Example: 4y = 20
→ Divide both sides by 4
→ 4y/4 = 20/4
→ y = 5
The coefficient divides out, leaving y alone.`,
      },
      {
        point: 'Solving x/a = b (Division Equations)',
        detail: `If a variable is divided by a number, multiply both sides by that number.
Example: m/3 = 6
→ Multiply both sides by 3
→ (m/3) × 3 = 6 × 3
→ m = 18
The division is cancelled by multiplication.`,
      },
      {
        point: 'Fractional Coefficients',
        detail: `If you have (1/2)x = 5, multiply both sides by 2:
→ (1/2)x × 2 = 5 × 2
→ x = 10
Or equivalently: divide by (1/2) is the same as multiply by 2.
Always multiply by the reciprocal of a fractional coefficient.`,
      },
    ],

    workedExamples: [
      {
        problem: 'Solve: 4y = 20',
        steps: [
          'y is multiplied by 4: inverse is ÷4',
          'Divide both sides by 4: 4y/4 = 20/4',
          '4/4 = 1: left side becomes y',
          'Right side: 20/4 = 5',
          'y = 5',
        ],
        answer: 'y = 5',
      },
      {
        problem: 'Solve: m/3 = 6',
        steps: [
          'm is divided by 3: inverse is ×3',
          'Multiply both sides by 3: (m/3)×3 = 6×3',
          'Left: m. Right: 18',
          'm = 18',
        ],
        answer: 'm = 18',
      },
      {
        problem: 'Solve: 5p = −25',
        steps: [
          'p is multiplied by 5: divide both sides by 5',
          '5p/5 = −25/5',
          'Left: p. Right: −25/5 = −5',
          'p = −5',
        ],
        answer: 'p = −5',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Adding the coefficient instead of dividing',
        example: 'Solving 4y = 20 by doing 4y + 4 = 24 → y = 6 (WRONG)',
        why: 'Students confuse the inverse of multiplication with addition.',
        fix: 'Multiplication is undone by division. ALWAYS divide by the coefficient.',
      },
      {
        mistake: 'Dividing only the term with the variable, not the other side',
        example: '4y = 20 → 4y/4 = 20 → y = 20 (forgot to divide the right side)',
        why: 'Forgetting the balance principle.',
        fix: 'Both sides must be divided by 4: 4y/4 = 20/4.',
      },
    ],

    visualAnalogy: `Imagine you're packing equal-weight boxes for delivery. If 4 boxes weigh 20 kg total,
each box weighs 20÷4 = 5 kg. You divided to find the per-unit weight.
In algebra: the equation tells you the total; division reveals what each variable holds.`,

    connectionToPrior: `K08 handled add/subtract inverses. K09 handles multiply/divide inverses.
Together K08 and K09 are the complete "toolkit" for isolating variables in equations.`,
  },

  // ─────────────────────────────────────────────
  // SUBTOPIC 5: Complex Equations & Word Problems
  // ─────────────────────────────────────────────
  {
    id: 'K10',
    title: 'One-Step Equations',
    subtopic: 'Equations & Word Problems',
    subtopicOrder: 1,
    prerequisites: ['K08', 'K09'],
    emoji: '🔑',
    color: '#11998e',

    storyHook: `A treasure chest has ONE lock. You have ONE key. One turn opens it.
One-step equations work exactly this way — there is ONE operation applied to the variable,
and you need exactly ONE inverse operation to unlock it and find the answer.
Whether it's +, −, ×, or ÷, you just apply the opposite once and you're done.`,

    conceptExplanation: [
      {
        point: 'Identifying the One Operation',
        detail: `A one-step equation has the variable surrounded by exactly one operation.
Look for what's been "done" to the variable:
Added to? → Subtract.
Subtracted from? → Add.
Multiplied by? → Divide.
Divided by? → Multiply.
One look, one decision, one step.`,
      },
      {
        point: 'The Four Types',
        detail: `Type 1: x + a = b → x = b − a
Type 2: x − a = b → x = b + a
Type 3: ax = b → x = b/a
Type 4: x/a = b → x = b × a
Recognizing the type instantly speeds up your work.`,
      },
    ],

    workedExamples: [
      {
        problem: 'Solve: p/4 = 2',
        steps: [
          'Operation on p: divided by 4',
          'Inverse: multiply by 4',
          'Both sides × 4: (p/4)×4 = 2×4',
          'p = 8',
        ],
        answer: 'p = 8',
      },
      {
        problem: 'Solve: −3 + x = 7',
        steps: [
          'Rewrite: x − 3 = 7',
          'Operation on x: subtract 3',
          'Inverse: add 3 to both sides',
          'x = 7 + 3 = 10',
        ],
        answer: 'x = 10',
      },
      {
        problem: 'Solve: 2.5n = 10',
        steps: [
          'n is multiplied by 2.5',
          'Divide both sides by 2.5',
          'n = 10/2.5 = 4',
        ],
        answer: 'n = 4',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Applying the wrong inverse for division equations',
        example: 'For m/3 = 6: dividing both sides by 3 again to get m/9 = 2 (WRONG)',
        why: 'Seeing a fraction makes students want to divide further.',
        fix: 'Division needs multiplication to undo it. The fraction bar = "divided by".',
      },
    ],

    visualAnalogy: `A one-step equation is like a gift wrapped in exactly ONE layer of paper.
Tear off that one layer (apply the inverse) and you reach the present (the value of x) immediately.`,

    connectionToPrior: `K08 taught add/subtract inverses. K09 taught multiply/divide inverses.
K10 brings them together in real equation contexts. One-step equations are where
the solving skills first become directly usable.`,
  },

  {
    id: 'K11',
    title: 'Two-Step Equations',
    subtopic: 'Equations & Word Problems',
    subtopicOrder: 2,
    prerequisites: ['K10'],
    emoji: '🗝️🗝️',
    color: '#fc4a1a',

    storyHook: `Now the treasure chest has TWO locks. You need TWO keys, used in the right order.
The rule for two-step equations: always undo the ADD/SUBTRACT layer FIRST,
then undo the MULTIPLY/DIVIDE layer. Think of it as REVERSE PEMDAS — work backwards.
PEMDAS says: multiply first, then add. To UNDO: subtract first, then divide.`,

    conceptExplanation: [
      {
        point: 'The SADMEP Rule (Reverse PEMDAS)',
        detail: `When solving, peel operations in REVERSE order of PEMDAS:
PEMDAS builds: (1) Multiply, (2) Add
SADMEP undoes: (1) Subtract/Add first, (2) Divide/Multiply second
For equation 2x + 3 = 11:
Step 1: Undo the +3 first (subtract 3)
Step 2: Undo the ×2 (divide by 2)`,
      },
      {
        point: 'Why This Order?',
        detail: `Think of it like putting on clothes: socks go on before shoes.
To undress, shoes come off BEFORE socks (reverse order).
In 2x + 3: first 2x was calculated, then 3 was added.
To undo: first remove the 3 (outermost operation), then remove the 2 (innermost).`,
      },
      {
        point: 'Checking Your Answer',
        detail: `ALWAYS verify by substituting your answer back into the ORIGINAL equation.
For 2x + 3 = 11, if x = 4: 2(4) + 3 = 8 + 3 = 11 ✓
If your check fails, you made an error somewhere. Retrace your steps.`,
      },
    ],

    workedExamples: [
      {
        problem: 'Solve: 2x + 1 = 9',
        steps: [
          'Step 1: Undo +1. Subtract 1 from both sides: 2x + 1 − 1 = 9 − 1 → 2x = 8',
          'Step 2: Undo ×2. Divide both sides by 2: 2x/2 = 8/2 → x = 4',
          'Check: 2(4) + 1 = 9 ✓',
        ],
        answer: 'x = 4',
      },
      {
        problem: 'Solve: 2p − 3 = 7',
        steps: [
          'Step 1: Undo −3. Add 3 to both sides: 2p − 3 + 3 = 7 + 3 → 2p = 10',
          'Step 2: Undo ×2. Divide by 2: p = 5',
          'Check: 2(5) − 3 = 10 − 3 = 7 ✓',
        ],
        answer: 'p = 5',
      },
      {
        problem: 'Solve: 3m/2 − 4 = 5',
        steps: [
          'Step 1: Undo −4. Add 4: 3m/2 = 9',
          'Step 2: Undo ÷2. Multiply by 2: 3m = 18',
          'Step 3: Undo ×3. Divide by 3: m = 6',
          'Check: 3(6)/2 − 4 = 9 − 4 = 5 ✓',
        ],
        answer: 'm = 6',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Dividing before adding/subtracting',
        example: 'For 2p − 3 = 7: dividing by 2 first → p − 3/2 = 7/2 (messy and wrong path)',
        why: 'Students follow PEMDAS order instead of reversing it.',
        fix: 'SADMEP: subtract/add FIRST, then multiply/divide.',
      },
      {
        mistake: 'Not distributing the operation to the whole right side',
        example: 'In 2x + 1 = 9, subtracting 1 from only +1 on left, leaving right at 9: x = 9',
        why: 'Balance principle forgotten during the second step.',
        fix: 'Both sides in every step. Write it out fully every time.',
      },
    ],

    visualAnalogy: `Think of a gift inside a box inside a bag. To get the gift, remove the bag (outermost = add/subtract)
first, THEN open the box (innermost = multiply/divide). Wrong order = you're ripping through the box with the bag still on.`,

    connectionToPrior: `K10 handled one-step equations (one operation). K11 layers them:
two operations, worked through in the correct reverse order. This is the most commonly tested
equation type in standardized mathematics tests.`,
  },

  {
    id: 'K12',
    title: 'Word Problems (UPSCE Framework)',
    subtopic: 'Equations & Word Problems',
    subtopicOrder: 3,
    prerequisites: ['K11'],
    emoji: '🕵️',
    color: '#8360c3',

    storyHook: `You're a detective. A crime has been committed — but the evidence is written in ENGLISH,
not algebra. Your job: TRANSLATE the English clues into algebraic equations, then solve.
The UPSCE framework is your detective's toolkit:
U — Understand what's unknown
P — Plan your operations
S — Set up the equation
C — Calculate the solution
E — Express the answer clearly
Every word problem, no matter how complex, yields to this system.`,

    conceptExplanation: [
      {
        point: 'U — Understand',
        detail: `Read the problem carefully. Ask:
• What am I looking for? (Define the unknown — "Let x = ...")
• What information is given?
• What relationships are described?
Example: "Maya has 3 times as many books as Leo. Together they have 20 books."
Unknown: Leo's books (let x = Leo's books). Maya has 3x books.`,
      },
      {
        point: 'P — Plan + S — Set Up',
        detail: `Key word translation guide:
"is / equals" → =
"sum of, more than, added to" → +
"less than, difference, fewer" → −
"times, product, of" → ×
"per, for each, divided by" → ÷
"twice / double" → 2× | "triple" → 3×
"four less than a number" → x − 4 (NOT 4 − x!)`,
      },
      {
        point: 'C — Calculate + E — Express',
        detail: `Once the equation is set up, solve using K08–K11 techniques.
After finding x, ALWAYS write the answer in words in context:
"Therefore, Leo has 5 books and Maya has 15 books."
Verify: 5 + 15 = 20 ✓. 15 = 3×5 ✓.`,
      },
    ],

    workedExamples: [
      {
        problem: '"Twice a number is ten." Find the number.',
        steps: [
          'U: Unknown = the number. Let n = the number.',
          'P: "Twice" = ×2. "Is" = =. "Ten" = 10.',
          'S: 2n = 10',
          'C: Divide both sides by 2: n = 5',
          'E: The number is 5. Check: 2×5 = 10 ✓',
        ],
        answer: 'n = 5',
      },
      {
        problem: '"Four less than a number is ten." Find the number.',
        steps: [
          'U: Let n = the number',
          'P: "Four less than a number" = n − 4 (NOT 4 − n!)',
          'S: n − 4 = 10',
          'C: Add 4: n = 14',
          'E: The number is 14. Check: 14 − 4 = 10 ✓',
        ],
        answer: 'n = 14',
      },
      {
        problem: '"A taxi charges ₹50 plus ₹12 per kilometre. The total fare was ₹170. How many km was the ride?"',
        steps: [
          'U: Let k = kilometres travelled',
          'P: Base charge + per-km charge = total. 50 + 12k = 170',
          'S: 50 + 12k = 170',
          'C: Subtract 50: 12k = 120. Divide by 12: k = 10',
          'E: The ride was 10 km. Check: 50 + 12(10) = 50 + 120 = 170 ✓',
        ],
        answer: 'k = 10 km',
      },
    ],

    commonMistakes: [
      {
        mistake: '"Less than" reversal',
        example: '"4 less than n" being written as 4 − n instead of n − 4',
        why: 'Students read left-to-right: "4" then "less than" → think 4 is first.',
        fix: '"Less than" always means subtract FROM the number mentioned after it: [number] − 4.',
      },
      {
        mistake: 'Forgetting to express the answer in context',
        example: 'Writing only "x = 5" when the question asks "how many books does Maya have?"',
        why: 'x was defined as Leo\'s books; the question asks about Maya (3x).',
        fix: 'Re-read the question. Calculate ALL requested quantities from your x value.',
      },
    ],

    visualAnalogy: `Word problems are written in two languages: English and Algebra.
You are a bilingual translator. The UPSCE framework is your dictionary.
Every English phrase has an algebraic equivalent — once you can translate, solving is just K08–K11.`,

    connectionToPrior: `K12 is the capstone: it requires every skill from K01 to K11.
Variables (K01), expressions (K02–K05), equations (K06), balance (K07),
inverse operations (K08, K09), and equation solving (K10, K11) all come together
to model and solve real-world problems.`,
  },

  // ─────────────────────────────────────────────
  // SUBTOPIC 1 (cont.): Variables & Expressions — K13
  // ─────────────────────────────────────────────
  {
    id: 'K13',
    title: 'Writing Algebraic Expressions',
    subtopic: 'Variables & Expressions',
    subtopicOrder: 3,
    prerequisites: ['K02'],
    emoji: '✏️',
    color: '#2ECC71',

    storyHook: `Riya earns pocket money helping at home. On Monday she earns ₹5 per task.
If she completes t tasks, she earns 5t rupees — that's an algebraic expression for her earnings!
On Tuesday she earns the same amount PLUS a ₹20 bonus: 5t + 20.
The beauty of algebra is that this single expression works for ANY number of tasks.
Translating everyday situations into algebraic expressions is one of the most powerful skills in maths.`,

    conceptExplanation: [
      {
        point: 'The Key Vocabulary: Operation Words',
        detail: `Certain English words always signal a specific operation:
• "increased by / more than / sum of / added to" → + (addition)
• "decreased by / less than / difference / subtracted from" → − (subtraction)
• "times / product of / multiplied by / of" → × (multiplication)
• "divided by / quotient of / per / for each" → ÷ (division)
Memorising these translations is the foundation of converting word phrases to algebra.`,
      },
      {
        point: 'Danger: "Less Than" Reversal',
        detail: `The sneakiest phrase is "less than". It REVERSES the order.
"4 less than n" does NOT mean 4 − n. It means n − 4.
Think: "4 less than MY score" = MY SCORE minus 4. Your score (n) comes first.
Similarly: "8 less than twice a number" = 2n − 8, not 8 − 2n.
Always ask: what is being reduced? That comes first.`,
      },
      {
        point: 'Building Multi-Operation Expressions',
        detail: `Some phrases combine several operations. Work from left to right through the phrase.
"Twice a number, increased by 7" → 2n + 7 (first double, then add 7)
"The product of 3 and a number, minus 10" → 3n − 10
"Five more than the quotient of a number and 4" → n/4 + 5
When in doubt, break the phrase into parts and translate each part separately.`,
      },
    ],

    workedExamples: [
      {
        problem: 'Write an algebraic expression for: "A number decreased by 11"',
        steps: [
          '"A number" → use a variable, say n',
          '"Decreased by 11" → subtract 11',
          'Result: n − 11',
        ],
        answer: 'n − 11',
      },
      {
        problem: 'Write an expression for: "Twice a number, increased by 6"',
        steps: [
          '"A number" → n',
          '"Twice" → multiply by 2 → 2n',
          '"Increased by 6" → add 6',
          'Result: 2n + 6',
        ],
        answer: '2n + 6',
      },
      {
        problem: 'Write an expression for: "Three times the sum of a number and 5"',
        steps: [
          '"A number and 5" → (n + 5) — the sum goes in brackets first',
          '"Three times" → multiply by 3',
          'Result: 3(n + 5)',
          'Note: 3(n + 5) ≠ 3n + 5 — we multiply the WHOLE bracket by 3',
        ],
        answer: '3(n + 5)',
      },
    ],

    commonMistakes: [
      {
        mistake: '"Less than" written in the wrong order',
        example: 'Writing "6 less than x" as 6 − x instead of x − 6',
        why: '"6 less than x" means x with 6 taken away. x comes first.',
        fix: 'Ask: from WHAT are we subtracting? That quantity comes first. x − 6.',
      },
      {
        mistake: 'Forgetting brackets with "times the sum of"',
        example: '"3 times the sum of n and 4" written as 3n + 4 instead of 3(n + 4)',
        why: '"Times the sum" means multiply the whole group, not just the variable.',
        fix: 'Put the sum in brackets first, THEN multiply: 3(n + 4) = 3n + 12.',
      },
    ],

    visualAnalogy: `Think of English-to-Algebra as a translation dictionary.
Just as "bonjour" = "hello", "increased by 7" = "+7".
A skilled translator works phrase by phrase, never whole sentences at once.
Break each phrase apart, translate it, then assemble the pieces.`,

    connectionToPrior: `K01 introduced variables and K02 introduced coefficients and terms.
K13 teaches you to BUILD expressions from scratch using those building blocks.
You now go from "understanding" algebra to "creating" it — a big leap forward.`,
  },

  // ─────────────────────────────────────────────
  // SUBTOPIC 2 (cont.): Evaluating & Simplifying — K14
  // ─────────────────────────────────────────────
  {
    id: 'K14',
    title: 'Tables of Values & Patterns',
    subtopic: 'Evaluating & Simplifying',
    subtopicOrder: 3,
    prerequisites: ['K03', 'K13'],
    emoji: '📊',
    color: '#E67E22',

    storyHook: `Arjun plays a mobile game where his score each level follows a rule:
Level 1 = 4 points, Level 2 = 7 points, Level 3 = 10 points, Level 4 = 13 points...
Do you see the pattern? Each level adds 3 more points. Starting at 4.
If we call the level number n, the score at level n is always 3n + 1.
We can verify: level 1 → 3(1)+1 = 4 ✓, level 5 → 3(5)+1 = 16.
Algebra lets us predict ANY level's score without listing them all!`,

    conceptExplanation: [
      {
        point: 'Building a Table of Values',
        detail: `A table of values shows what an expression equals for different values of the variable.
For the expression 2n + 3:
n = 1 → 2(1)+3 = 5
n = 2 → 2(2)+3 = 7
n = 3 → 2(3)+3 = 9
n = 4 → 2(4)+3 = 11
Pattern: goes up by 2 each time (the coefficient of n tells you the step size).`,
      },
      {
        point: 'Finding the Rule (nth Term)',
        detail: `Given a pattern of numbers, we can work backwards to find the algebraic rule.
Step 1: Find the difference between consecutive terms → this is the coefficient of n.
Step 2: Work out what to add/subtract to get the sequence to match.
Example: 5, 8, 11, 14, ... → difference = 3 → rule involves 3n.
       When n=1, we get 5. So 3(1) + ? = 5 → ? = 2. Rule: 3n + 2.
Check: n=2 → 3(2)+2 = 8 ✓, n=3 → 3(3)+2 = 11 ✓`,
      },
      {
        point: 'Using a Rule to Predict',
        detail: `Once you have an algebraic rule, you can predict ANY term instantly.
For rule 3n + 2: what is the 100th term? → 3(100) + 2 = 302.
No need to list all 100 terms — algebra jumps straight to the answer.
This is the power of algebra: it turns patterns into prediction machines.`,
      },
    ],

    workedExamples: [
      {
        problem: 'The expression for a pattern is 4n − 1. Find the values when n = 1, 2, 3, 4.',
        steps: [
          'n=1: 4(1)−1 = 4−1 = 3',
          'n=2: 4(2)−1 = 8−1 = 7',
          'n=3: 4(3)−1 = 12−1 = 11',
          'n=4: 4(4)−1 = 16−1 = 15',
          'The table of values is: 3, 7, 11, 15. Step size = 4 (the coefficient of n).',
        ],
        answer: '3, 7, 11, 15',
      },
      {
        problem: 'Find the algebraic rule for the pattern: 2, 5, 8, 11, ...',
        steps: [
          'Step 1: Find the common difference: 5−2 = 3, 8−5 = 3, 11−8 = 3. Difference = 3.',
          'Step 2: Rule is of the form 3n + c.',
          'Step 3: When n=1, value = 2. So 3(1) + c = 2 → c = −1.',
          'Rule: 3n − 1',
          'Check: n=2 → 3(2)−1 = 5 ✓, n=3 → 3(3)−1 = 8 ✓',
        ],
        answer: '3n − 1',
      },
      {
        problem: 'A rule gives the sequence 6, 10, 14, 18, ... What is the 20th term?',
        steps: [
          'Common difference = 4. Rule involves 4n.',
          'When n=1, value = 6. So 4(1) + c = 6 → c = 2. Rule: 4n + 2.',
          'Predict the 20th term: 4(20) + 2 = 80 + 2 = 82.',
        ],
        answer: '82',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Confusing the step size with the constant',
        example: 'For sequence 5,8,11,14 writing the rule as 3n+5 instead of 3n+2',
        why: 'The step size (3) is correct but the constant is found by checking n=1: 3(1)+c=5 → c=2.',
        fix: 'Always verify by substituting n=1 into your rule and checking it matches the first term.',
      },
      {
        mistake: 'Thinking every sequence starts at n=0',
        example: 'Using n=0 for the first term when the sequence is meant to start at n=1',
        why: 'In most problems at this level, the first term corresponds to n=1.',
        fix: 'Check the problem statement — it usually says "Term 1 = ..." or "n starts at 1".',
      },
    ],

    visualAnalogy: `A table of values is like a vending machine:
you put in a number (n), and the machine spits out the answer using the rule.
The algebraic rule is the machine's internal program — once you know the rule,
you can predict the output for ANY input instantly, without checking every single value.`,

    connectionToPrior: `K03 taught you to evaluate expressions for one value at a time.
K14 extends this: you evaluate for multiple values to build a table, then reverse-engineer the rule.
This bridges arithmetic patterns (primary school) and algebraic generalisation (high school).`,
  },

  // ─────────────────────────────────────────────
  // SUBTOPIC 3 (cont.): Simplifying & Structure — K15
  // ─────────────────────────────────────────────
  {
    id: 'K15',
    title: 'The Distributive Property',
    subtopic: 'Simplifying & Structure',
    subtopicOrder: 3,
    prerequisites: ['K05'],
    emoji: '🔓',
    color: '#1ABC9C',

    storyHook: `Mrs Patel is packing lunch boxes for a school trip.
Each of the 4 boxes needs 2 sandwiches AND 3 fruit cups.
How many items in total? She has two strategies:
Strategy 1: Calculate per box (2+3=5 items), then total: 4×5 = 20.
Strategy 2: Sandwiches: 4×2=8, Fruit cups: 4×3=12, Total: 8+12 = 20. Same answer!
In algebra: 4(2+3) = 4×2 + 4×3. This is the DISTRIBUTIVE PROPERTY.
It lets us expand brackets by multiplying EACH TERM inside by the number outside.`,

    conceptExplanation: [
      {
        point: 'The Rule: a(b + c) = ab + ac',
        detail: `When a number (or term) sits outside brackets next to an addition/subtraction,
it multiplies EACH term inside the brackets separately.
Examples:
• 3(x + 4) = 3x + 12
• 2(5 − y) = 10 − 2y
• 5(2n + 3) = 10n + 15
The number outside is "distributed" across every term inside — hence the name.`,
      },
      {
        point: 'Watch the Signs!',
        detail: `When the multiplier is negative, distributing flips all the signs inside.
• −2(x + 3) = −2x − 6  (both terms become negative)
• −(4 − y) = −4 + y = y − 4  (the invisible −1 distributes through)
When the sign inside is negative and the multiplier is negative:
• −3(2 − x) = −6 + 3x  (negative × negative = positive)
Always distribute to EVERY term, including constants.`,
      },
      {
        point: 'Expand Then Simplify',
        detail: `The distributive property is most powerful when combined with collecting like terms.
Expand 3(x + 4) + 2x:
Step 1: Expand → 3x + 12 + 2x
Step 2: Collect like terms → 5x + 12
This two-step process — EXPAND then SIMPLIFY — appears in almost every algebra problem.`,
      },
    ],

    workedExamples: [
      {
        problem: 'Expand: 3(x + 4)',
        steps: [
          'Multiply 3 by x: 3 × x = 3x',
          'Multiply 3 by 4: 3 × 4 = 12',
          'Result: 3x + 12',
        ],
        answer: '3x + 12',
      },
      {
        problem: 'Expand: 2(5 − y)',
        steps: [
          'Multiply 2 by 5: 2 × 5 = 10',
          'Multiply 2 by (−y): 2 × (−y) = −2y',
          'Result: 10 − 2y',
        ],
        answer: '10 − 2y',
      },
      {
        problem: 'Expand and simplify: 4(x + 3) + 2x',
        steps: [
          'Step 1 — Expand: 4(x + 3) = 4x + 12',
          'Expression becomes: 4x + 12 + 2x',
          'Step 2 — Collect like terms: 4x + 2x = 6x',
          'Result: 6x + 12',
        ],
        answer: '6x + 12',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Only multiplying the first term inside the bracket',
        example: '3(x + 4) written as 3x + 4 instead of 3x + 12',
        why: 'You must distribute to EVERY term inside the bracket, including constants.',
        fix: 'Draw arrows from the multiplier to each term inside: 3→x and 3→4. Both get multiplied.',
      },
      {
        mistake: 'Forgetting to distribute a negative',
        example: '−2(x − 3) written as −2x − 3 instead of −2x + 6',
        why: '−2 × (−3) = +6, not −3. Distributing a negative flips every sign inside.',
        fix: 'When the multiplier is negative, change ALL the signs inside: −2(x−3) = −2x + 6.',
      },
    ],

    visualAnalogy: `Imagine the number outside the bracket is a postman with a message to deliver.
He must knock on EVERY door inside the bracket — no one gets skipped!
If the postman carries a "−" (negative), every person he visits gets the opposite sign.`,

    connectionToPrior: `K04 and K05 taught you to combine like terms once they're visible.
K15 teaches you to REVEAL hidden like terms by removing brackets first.
The full simplification sequence is: Expand (K15) → Collect (K04/K05).
K15 also sets up the equation-solving patterns in K07–K11 where brackets appear frequently.`,
  },
];

export default KNOWLEDGE_NODES;
