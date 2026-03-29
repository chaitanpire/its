/**
 * assessmentBank.js
 * 4 questions per knowledge node with correct answers, distractors,
 * error tags, and pedagogical explanations for every wrong option.
 */

export const ASSESSMENT_BANK = {
  K01: [
    {
      id: 'K01_Q1',
      difficulty: 1,
      stem: 'Which of the following is a variable in the expression: 14 − 3y?',
      correct: 'y',
      options: ['y', '3', '14', '14 − 3'],
      errorTags: {
        '3': 'coefficient_confusion',
        '14': 'constant_confusion',
        '14 − 3': 'expression_confusion',
      },
      explanations: {
        correct: 'Correct! y is a letter — it represents an unknown number. That\'s exactly what a variable does.',
        '3': 'Close, but 3 is the COEFFICIENT — it\'s a fixed number that multiplies y. Variables are always letters.',
        '14': '14 is a CONSTANT — it\'s a fixed number that never changes. Variables are letters like x, y, a, n.',
        '14 − 3': 'This is a partial expression, not a single variable. Variables are individual letters.',
      },
    },
    {
      id: 'K01_Q2',
      difficulty: 1,
      stem: 'In the expression 5 + n, what is the constant?',
      correct: '5',
      options: ['5', 'n', '5 + n', 'There is no constant'],
      errorTags: {
        'n': 'variable_vs_constant',
        '5 + n': 'expression_confusion',
        'There is no constant': 'missing_constant',
      },
      explanations: {
        correct: '5 is correct! It\'s a fixed number with no letter — constants stay the same no matter what.',
        'n': 'n is the VARIABLE (the letter representing an unknown). Constants are plain numbers.',
        '5 + n': 'That\'s the whole expression. The constant is the plain number part: 5.',
        'There is no constant': 'There is a constant: 5. Whenever you see a plain number, that\'s a constant.',
      },
    },
    {
      id: 'K01_Q3',
      difficulty: 2,
      stem: 'How many variables are in the expression: 3a + 2b − 7?',
      correct: '2',
      options: ['2', '3', '1', '0'],
      errorTags: {
        '3': 'counting_constants_as_variables',
        '1': 'counting_only_first_variable',
        '0': 'no_recognition_of_variables',
      },
      explanations: {
        correct: 'Correct! a and b are the two variables (two different letters).',
        '3': 'You might have counted the numbers too. Only LETTERS (a, b) are variables. There are 2.',
        '1': 'There are actually 2 letters: a AND b. Both are variables.',
        '0': 'Look for letters in the expression: a and b are both variables. There are 2.',
      },
    },
    {
      id: 'K01_Q4',
      difficulty: 3,
      stem: 'Write an expression for: "A number decreased by 12"',
      correct: 'n − 12',
      options: ['n − 12', '12 − n', 'n + 12', '12n'],
      errorTags: {
        '12 − n': 'order_reversal',
        'n + 12': 'operation_confusion',
        '12n': 'multiplication_confusion',
      },
      explanations: {
        correct: 'n − 12 is correct! "A number decreased by 12" means we START with the number and subtract 12.',
        '12 − n': 'This means "12 decreased by the number" — the order is reversed! "Decreased BY 12" means subtract 12 FROM the number.',
        'n + 12': '"Decreased" means to get smaller, which means subtraction. This expression increases n.',
        '12n': '"12n" means 12 multiplied by n (twelve times n), not decreased by 12.',
      },
    },
    {
      id: 'K01_Q5',
      difficulty: 1,
      stem: 'In the expression 2p − 9, which symbol is the variable?',
      correct: 'p',
      options: ['p', '2', '9', '2p'],
      errorTags: {
        '2': 'coefficient_confusion',
        '9': 'constant_confusion',
        '2p': 'term_confusion',
      },
      explanations: {
        correct: 'Correct! p is a letter representing an unknown number — that is a variable.',
        '2': '2 is the COEFFICIENT (the number multiplying p). Variables are always letters.',
        '9': '9 is a CONSTANT — a fixed number. Look for a letter to find the variable.',
        '2p': '2p is a TERM (coefficient × variable together). The variable alone is just p.',
      },
    },
    {
      id: 'K01_Q6',
      difficulty: 1,
      stem: 'What does a variable represent in an algebraic expression?',
      correct: 'An unknown or changing quantity',
      options: ['An unknown or changing quantity', 'A fixed number', 'A mathematical operation', 'The answer to the problem'],
      errorTags: {
        'A fixed number': 'confuses_variable_with_constant',
        'A mathematical operation': 'operation_confusion',
        'The answer to the problem': 'answer_confusion',
      },
      explanations: {
        correct: 'Correct! Variables (letters like x, n, y) stand in for unknown or changing values.',
        'A fixed number': 'Fixed numbers are CONSTANTS (like 5 or −3). Variables can change — that\'s why they\'re called variables!',
        'A mathematical operation': 'Operations are symbols like + − × ÷. Variables are letter symbols (x, y, n) holding unknown values.',
        'The answer to the problem': 'A variable is the unknown we\'re trying to FIND. It\'s not the answer itself.',
      },
    },
    {
      id: 'K01_Q7',
      difficulty: 1,
      stem: 'Which of the following is NOT a variable?',
      correct: '9',
      options: ['9', 'x', 'n', 't'],
      errorTags: {
        'x': 'variable_not_recognised',
        'n': 'variable_not_recognised',
        't': 'variable_not_recognised',
      },
      explanations: {
        correct: 'Correct! 9 is a plain number — a constant. Variables are always letters.',
        'x': 'x IS a variable — it is a letter representing an unknown. Only plain numbers like 9 are constants.',
        'n': 'n IS a variable — letters always represent unknowns in algebra.',
        't': 't IS a variable — any letter used to represent an unknown value is a variable.',
      },
    },
    {
      id: 'K01_Q8',
      difficulty: 2,
      stem: 'How many constants are in the expression: 5x − 3 + 2y?',
      correct: '1',
      options: ['1', '2', '3', '0'],
      errorTags: {
        '2': 'coefficients_counted_as_constants',
        '3': 'all_numbers_counted',
        '0': 'missed_the_constant',
      },
      explanations: {
        correct: 'Correct! Only −3 is a plain number with no variable — that is the one constant. 5 and 2 are coefficients (attached to variables).',
        '2': '5 and 2 are COEFFICIENTS — they multiply variables (x and y). Only the standalone −3 is a constant.',
        '3': 'There are three numbers (5, 3, 2) but 5 and 2 are coefficients. Only −3 stands alone as a constant.',
        '0': 'Look carefully — −3 has no letter beside it. A standalone number is always a constant.',
      },
    },
    {
      id: 'K01_Q9',
      difficulty: 2,
      stem: 'Which expression has exactly ONE variable and ONE constant?',
      correct: 'n + 7',
      options: ['n + 7', 'a + b', '3', 'xy − 2'],
      errorTags: {
        'a + b': 'two_variables_no_constant',
        '3': 'no_variable_only_constant',
        'xy − 2': 'two_variables_one_constant',
      },
      explanations: {
        correct: 'Correct! n is one variable and 7 is one constant. Exactly one of each.',
        'a + b': 'a and b are TWO variables and there is no constant. That is 2 variables, 0 constants.',
        '3': '3 is just one constant with no variable at all.',
        'xy − 2': 'x and y are TWO variables. This expression has two variables and one constant (−2).',
      },
    },
    {
      id: 'K01_Q10',
      difficulty: 2,
      stem: 'In the expression 10 − k + 4, name ALL the constants.',
      correct: '10 and 4',
      options: ['10 and 4', '10 only', '4 only', 'k'],
      errorTags: {
        '10 only': 'missed_second_constant',
        '4 only': 'missed_first_constant',
        'k': 'variable_mistaken_for_constant',
      },
      explanations: {
        correct: 'Correct! Both 10 and 4 are plain numbers — both are constants. k is the variable.',
        '10 only': 'Don\'t forget 4 — it also has no variable attached. Both 10 AND 4 are constants.',
        '4 only': 'Don\'t forget 10 — it also has no variable attached. Both 10 AND 4 are constants.',
        'k': 'k is the VARIABLE (letter representing an unknown). 10 and 4 are the constants.',
      },
    },
    {
      id: 'K01_Q11',
      difficulty: 2,
      stem: 'True or False: In p + q − 5, there are two variables and one constant.',
      correct: 'True',
      options: ['True', 'False — there are two constants', 'False — there are three variables', 'False — there are no constants'],
      errorTags: {
        'False — there are two constants': 'second_variable_mistaken_for_constant',
        'False — there are three variables': 'constant_as_variable',
        'False — there are no constants': 'missed_constant',
      },
      explanations: {
        correct: 'Correct! p and q are the two variables (letters), and −5 is the one constant (standalone number).',
        'False — there are two constants': 'p and q are VARIABLES (letters), not constants. Only −5 is a constant.',
        'False — there are three variables': '−5 is a NUMBER (constant), not a variable. Only the letters p and q are variables.',
        'False — there are no constants': '−5 is a constant — a standalone number with no letter attached to it.',
      },
    },
    {
      id: 'K01_Q12',
      difficulty: 3,
      stem: 'An expression has exactly 3 variables and 2 constants. Which of the following qualifies?',
      correct: 'a + b − c + 4 − 1',
      options: ['a + b − c + 4 − 1', 'x + 2 + 3', 'p + q + 5', 'a + b + c − 7'],
      errorTags: {
        'x + 2 + 3': 'one_variable_two_constants',
        'p + q + 5': 'two_variables_one_constant',
        'a + b + c − 7': 'three_variables_one_constant',
      },
      explanations: {
        correct: 'Correct! a, b, c are 3 variables; 4 and 1 (or −1) are 2 separate constants. Exactly 3 variables and 2 constants.',
        'x + 2 + 3': 'Only 1 variable (x) and 2 constants (2 and 3). Needs 3 variables.',
        'p + q + 5': '2 variables (p, q) and 1 constant (5). Needs 3 variables and 2 constants.',
        'a + b + c − 7': 'Has 3 variables (a, b, c) but only 1 constant (−7). Needs 2 constants.',
      },
    },
    {
      id: 'K01_Q13',
      difficulty: 3,
      stem: 'Which expression represents: "the sum of a number x and the square of another number y, minus 8"?',
      correct: 'x + y² − 8',
      options: ['x + y² − 8', 'x² + y − 8', '(x + y)² − 8', 'xy − 8'],
      errorTags: {
        'x² + y − 8': 'squared_wrong_variable',
        '(x + y)² − 8': 'squared_whole_sum',
        'xy − 8': 'multiplication_instead_of_addition',
      },
      explanations: {
        correct: 'Correct! "A number x" → x. "The square of y" → y². "Minus 8" → −8. Together: x + y² − 8.',
        'x² + y − 8': '"The square of y" means y² (not x²). Check which variable gets squared.',
        '(x + y)² − 8': '"The square of y" means only y is squared: y². Here the WHOLE sum is squared, changing the meaning.',
        'xy − 8': '"Sum of x and y" means x + y (addition), not xy (multiplication).',
      },
    },
    {
      id: 'K01_Q14',
      difficulty: 3,
      stem: 'In 3r − 4s + 7, which statement is completely correct?',
      correct: 'r and s are variables; 3 and 4 are coefficients; 7 is a constant',
      options: [
        'r and s are variables; 3 and 4 are coefficients; 7 is a constant',
        '3 and 4 are variables; r and s are coefficients',
        'r, s, and 7 are all variables',
        '3r and 4s are constants',
      ],
      errorTags: {
        '3 and 4 are variables; r and s are coefficients': 'variables_and_coefficients_swapped',
        'r, s, and 7 are all variables': 'constant_treated_as_variable',
        '3r and 4s are constants': 'terms_confused_with_constants',
      },
      explanations: {
        correct: 'Correct! r and s (letters) are variables; 3 and 4 (numbers multiplying letters) are coefficients; 7 (standalone number) is a constant.',
        '3 and 4 are variables; r and s are coefficients': 'Reversed! Letters (r, s) are variables; numbers attached to letters (3, 4) are coefficients.',
        'r, s, and 7 are all variables': '7 is a standalone number — that makes it a CONSTANT, not a variable.',
        '3r and 4s are constants': '3r and 4s are TERMS (each containing a variable). Constants are standalone numbers like 7.',
      },
    },
  ],

  K02: [
    {
      id: 'K02_Q1',
      difficulty: 1,
      stem: 'What is the coefficient of x in: x + 7?',
      correct: '1',
      options: ['1', '0', '7', 'x'],
      errorTags: {
        '0': 'invisible_one_error',
        '7': 'constant_as_coefficient',
        'x': 'variable_as_coefficient',
      },
      explanations: {
        correct: 'Correct! When a variable has no written number, the coefficient is always 1 (1·x = x). The 1 is invisible but real!',
        '0': 'Not 0 — if the coefficient were 0, the term would disappear (0·x = 0). The invisible coefficient is 1.',
        '7': '7 is the CONSTANT term here, not the coefficient of x. The coefficient is the number directly attached to x.',
        'x': 'x is the variable itself. Its coefficient is the number multiplying it — which is 1.',
      },
    },
    {
      id: 'K02_Q2',
      difficulty: 1,
      stem: 'How many terms are in: 4x² − 3x + 7?',
      correct: '3',
      options: ['3', '2', '4', '1'],
      errorTags: {
        '2': 'missed_constant_term',
        '4': 'counting_coefficients_as_terms',
        '1': 'treating_whole_expression_as_one',
      },
      explanations: {
        correct: 'Correct! Three terms: 4x², −3x, and 7.',
        '2': 'You forgot the constant 7.',
        '4': 'You counted numbers instead of terms.',
        '1': 'Expressions are made of multiple terms.',
      },
    },
    {
      id: 'K02_Q3',
      difficulty: 2,
      stem: 'In −5y + 2, what is the coefficient of y?',
      correct: '−5',
      options: ['−5', '5', '2', '−1'],
      errorTags: {
        '5': 'sign_dropped',
        '2': 'constant_as_coefficient',
        '−1': 'wrong_sign_assumption',
      },
      explanations: {
        correct: 'Correct! The coefficient is −5.',
        '5': 'You dropped the negative sign.',
        '2': '2 is constant.',
        '−1': 'Coefficient is −5, not −1.',
      },
    },
    {
      id: 'K02_Q4',
      difficulty: 3,
      stem: 'Which expression has THREE terms with a leading coefficient of 4?',
      correct: '4x² − 2x + 1',
      options: ['4x² − 2x + 1', '4x − 2', '4x²', '2x² + 4x − 1'],
      errorTags: {
        '4x − 2': 'only_two_terms',
        '4x²': 'only_one_term',
        '2x² + 4x − 1': 'wrong_leading_coefficient',
      },
      explanations: {
        correct: 'Correct!',
        '4x − 2': 'Only 2 terms.',
        '4x²': 'Only 1 term.',
        '2x² + 4x − 1': 'Leading coefficient is 2.',
      },
    },

    // NEW QUESTIONS START HERE

    {
      id: 'K02_Q5',
      difficulty: 1,
      stem: 'What is the coefficient of y in: 6y?',
      correct: '6',
      options: ['6', 'y', '1', '0'],
      errorTags: {
        'y': 'variable_as_coefficient',
        '1': 'ignored_coefficient',
        '0': 'zero_confusion',
      },
      explanations: {
        correct: 'Correct! 6 multiplies y.',
        'y': 'y is the variable.',
        '1': 'Coefficient is explicitly 6.',
        '0': 'Coefficient is not zero.',
      },
    },

    {
      id: 'K02_Q6',
      difficulty: 1,
      stem: 'How many terms are in: 2a + 3b?',
      correct: '2',
      options: ['2', '3', '1', '0'],
      errorTags: {
        '3': 'counted_coefficients',
        '1': 'whole_expression',
        '0': 'no_recognition',
      },
      explanations: {
        correct: 'Correct! Two terms.',
        '3': 'Only count terms, not numbers.',
        '1': 'There are two separate terms.',
        '0': 'Terms exist here.',
      },
    },

    {
      id: 'K02_Q7',
      difficulty: 2,
      stem: 'What is the coefficient of x in: −x?',
      correct: '−1',
      options: ['−1', '1', '0', 'x'],
      errorTags: {
        '1': 'ignored_negative',
        '0': 'zero_confusion',
        'x': 'variable_confusion',
      },
      explanations: {
        correct: 'Correct! −x = −1x.',
        '1': 'Negative sign matters.',
        '0': 'Coefficient is not zero.',
        'x': 'x is variable.',
      },
    },

    {
      id: 'K02_Q8',
      difficulty: 2,
      stem: 'Which expression has exactly TWO terms?',
      correct: '3x + 4',
      options: ['3x + 4', '5x² + 3x + 1', '7', '2x'],
      errorTags: {
        '5x² + 3x + 1': 'three_terms',
        '7': 'single_constant',
        '2x': 'single_term',
      },
      explanations: {
        correct: 'Correct!',
        '5x² + 3x + 1': '3 terms.',
        '7': '1 term.',
        '2x': '1 term.',
      },
    },

    {
      id: 'K02_Q9',
      difficulty: 2,
      stem: 'What is the leading coefficient in: 7x³ − 2x + 5?',
      correct: '7',
      options: ['7', '−2', '5', '3'],
      errorTags: {
        '−2': 'second_term',
        '5': 'constant_confusion',
        '3': 'exponent_confusion',
      },
      explanations: {
        correct: 'Correct! Leading term is 7x³.',
        '−2': 'That’s second term.',
        '5': 'Constant is not leading.',
        '3': 'Exponent is not coefficient.',
      },
    },

    {
      id: 'K02_Q10',
      difficulty: 2,
      stem: 'In 9 − 2x, how many terms are there?',
      correct: '2',
      options: ['2', '1', '3', '0'],
      errorTags: {
        '1': 'whole_expression',
        '3': 'overcounting',
        '0': 'missed_terms',
      },
      explanations: {
        correct: 'Correct! 9 and −2x.',
        '1': 'There are two terms.',
        '3': 'Only two parts exist.',
        '0': 'Clearly has terms.',
      },
    },

    {
      id: 'K02_Q11',
      difficulty: 3,
      stem: 'Which expression has a leading coefficient of −3?',
      correct: '−3x² + 2x − 1',
      options: ['−3x² + 2x − 1', '3x² − 2x + 1', '−2x² + 3x − 1', 'x² − 3x + 1'],
      errorTags: {
        '3x² − 2x + 1': 'sign_error',
        '−2x² + 3x − 1': 'wrong_coefficient',
        'x² − 3x + 1': 'missing_coefficient',
      },
      explanations: {
        correct: 'Correct!',
        '3x² − 2x + 1': 'Coefficient is positive.',
        '−2x² + 3x − 1': 'Coefficient is −2.',
        'x² − 3x + 1': 'Coefficient is 1.',
      },
    },

    {
      id: 'K02_Q12',
      difficulty: 3,
      stem: 'How many terms are in: x² + 3x − 4 + y?',
      correct: '4',
      options: ['4', '3', '2', '1'],
      errorTags: {
        '3': 'missed_term',
        '2': 'under_counting',
        '1': 'whole_expression',
      },
      explanations: {
        correct: 'Correct! x², 3x, −4, y.',
        '3': 'You missed one term.',
        '2': 'There are four distinct terms.',
        '1': 'Expression has multiple terms.',
      },
    },
  ],

  K03: [
    {
      id: 'K03_Q1',
      difficulty: 1,
      stem: 'Evaluate 4a − 2 when a = 3.',
      correct: '10',
      options: ['10', '4', '14', '6'],
      errorTags: {
        '4': 'pemdas_violation',
        '14': 'added_instead_of_subtracted',
        '6': 'substitution_error',
      },
      explanations: {
        correct: 'Correct! 4(3) − 2 = 12 − 2 = 10.',
        '4': 'You subtracted before multiplying.',
        '14': 'You added instead of subtracting.',
        '6': 'Check substitution carefully.',
      },
    },
    {
      id: 'K03_Q2',
      difficulty: 2,
      stem: 'If m = 5, what is 3m + m − 2?',
      correct: '18',
      options: ['18', '13', '8', '20'],
      errorTags: {
        '13': 'coefficient_ignored',
        '8': 'operation_error',
        '20': 'missed_minus',
      },
      explanations: {
        correct: 'Correct!',
        '13': '3m means 3×5.',
        '8': 'Follow steps carefully.',
        '20': 'Forgot −2.',
      },
    },
    {
      id: 'K03_Q3',
      difficulty: 2,
      stem: 'Evaluate 2x² + 3 when x = 4',
      correct: '35',
      options: ['35', '131', '19', '64'],
      errorTags: {
        '131': 'wrong_exponent_application',
        '19': 'order_error',
        '64': 'forgot_constant',
      },
      explanations: {
        correct: 'Correct!',
        '131': 'Exponent applies only to x.',
        '19': 'Follow order of operations.',
        '64': 'Don’t forget +3.',
      },
    },
    {
      id: 'K03_Q4',
      difficulty: 3,
      stem: 'If n = −2, evaluate: n² − 3n + 5',
      correct: '15',
      options: ['15', '3', '−5', '7'],
      errorTags: {
        '3': 'square_sign_error',
        '−5': 'multiple_sign_errors',
        '7': 'missed_square',
      },
      explanations: {
        correct: 'Correct!',
        '3': 'Negative squared becomes positive.',
        '−5': 'Check all signs carefully.',
        '7': 'You missed squaring.',
      },
    },

    // NEW QUESTIONS

    {
      id: 'K03_Q5',
      difficulty: 1,
      stem: 'Evaluate 5x when x = 2.',
      correct: '10',
      options: ['10', '7', '25', '3'],
      errorTags: {
        '7': 'added_instead_of_multiplied',
        '25': 'squared_instead',
        '3': 'wrong_substitution',
      },
      explanations: {
        correct: 'Correct! 5×2 = 10.',
        '7': 'You added instead of multiplying.',
        '25': 'No squaring involved.',
        '3': 'Substitute correctly.',
      },
    },

    {
      id: 'K03_Q6',
      difficulty: 1,
      stem: 'Evaluate x + 6 when x = 4.',
      correct: '10',
      options: ['10', '24', '2', '6'],
      errorTags: {
        '24': 'multiplied_instead_added',
        '2': 'subtracted_instead',
        '6': 'ignored_variable',
      },
      explanations: {
        correct: 'Correct!',
        '24': 'Operation is addition, not multiplication.',
        '2': 'You subtracted incorrectly.',
        '6': 'You ignored x.',
      },
    },

    {
      id: 'K03_Q7',
      difficulty: 2,
      stem: 'Evaluate 3a + 2 when a = 4.',
      correct: '14',
      options: ['14', '20', '12', '6'],
      errorTags: {
        '20': 'added_before_multiplying',
        '12': 'forgot_constant',
        '6': 'wrong_order',
      },
      explanations: {
        correct: 'Correct!',
        '20': 'Multiply first.',
        '12': 'Don’t forget +2.',
        '6': 'Check steps.',
      },
    },

    {
      id: 'K03_Q8',
      difficulty: 2,
      stem: 'Evaluate 6 − 2x when x = 2.',
      correct: '2',
      options: ['2', '8', '−2', '12'],
      errorTags: {
        '8': 'added_instead_subtracted',
        '−2': 'wrong_order',
        '12': 'multiplied_all',
      },
      explanations: {
        correct: 'Correct!',
        '8': 'You added instead.',
        '−2': 'Check multiplication first.',
        '12': 'Incorrect operations.',
      },
    },

    {
      id: 'K03_Q9',
      difficulty: 2,
      stem: 'Evaluate 2(x + 3) when x = 5.',
      correct: '16',
      options: ['16', '13', '10', '25'],
      errorTags: {
        '13': 'forgot_multiplication',
        '10': 'ignored_bracket',
        '25': 'wrong_operation',
      },
      explanations: {
        correct: 'Correct!',
        '13': 'Multiply entire bracket.',
        '10': 'Evaluate inside first.',
        '25': 'Incorrect operation.',
      },
    },

    {
      id: 'K03_Q10',
      difficulty: 3,
      stem: 'Evaluate x² − 4 when x = −3.',
      correct: '5',
      options: ['5', '−13', '9', '−5'],
      errorTags: {
        '−13': 'sign_error',
        '9': 'forgot_subtraction',
        '−5': 'wrong_sign',
      },
      explanations: {
        correct: 'Correct!',
        '−13': 'Square becomes positive.',
        '9': 'Subtract 4.',
        '−5': 'Sign mistake.',
      },
    },

    {
      id: 'K03_Q11',
      difficulty: 3,
      stem: 'Evaluate 3x² − 2x when x = 2.',
      correct: '8',
      options: ['8', '12', '4', '16'],
      errorTags: {
        '12': 'missed_subtraction',
        '4': 'wrong_exponent',
        '16': 'wrong_operations',
      },
      explanations: {
        correct: 'Correct!',
        '12': 'Forgot −2x.',
        '4': 'x² miscalculated.',
        '16': 'Incorrect steps.',
      },
    },

    {
      id: 'K03_Q12',
      difficulty: 3,
      stem: 'Evaluate 2x² + 3x − 1 when x = −1.',
      correct: '−2',
      options: ['−2', '2', '4', '−4'],
      errorTags: {
        '2': 'sign_error',
        '4': 'ignored_negative',
        '−4': 'calculation_error',
      },
      explanations: {
        correct: 'Correct!',
        '2': 'Sign handling error.',
        '4': 'Negative not applied correctly.',
        '−4': 'Arithmetic mistake.',
      },
    },
  ],

  K04: [
    {
      id: 'K04_Q1',
      difficulty: 1,
      stem: 'Which term is a like term to 5x²?',
      correct: '−2x²',
      options: ['−2x²', '5x', '2x³', '5y²'],
      errorTags: {
        '5x': 'exponent_ignored',
        '2x³': 'different_exponent',
        '5y²': 'different_variable',
      },
      explanations: {
        correct: 'Correct!',
        '5x': 'Exponent is different.',
        '2x³': 'Exponent mismatch.',
        '5y²': 'Different variable.',
      },
    },
    {
      id: 'K04_Q2',
      difficulty: 1,
      stem: 'Which pair are like terms?',
      correct: '3x and −5x',
      options: ['3x and −5x', '3x and 3y', 'x² and x', '2xy and 2x'],
      errorTags: {
        '3x and 3y': 'different_variables',
        'x² and x': 'different_exponents',
        '2xy and 2x': 'different_variable_sets',
      },
      explanations: {
        correct: 'Correct!',
        '3x and 3y': 'Variables differ.',
        'x² and x': 'Exponents differ.',
        '2xy and 2x': 'Variable sets differ.',
      },
    },
    {
      id: 'K04_Q3',
      difficulty: 2,
      stem: 'In the expression 3a + 2b − a + 5b, how many distinct like-term groups are there?',
      correct: '2',
      options: ['2', '4', '3', '1'],
      errorTags: {
        '4': 'every_term_is_unique',
        '3': 'one_group_wrong',
        '1': 'all_terms_same',
      },
      explanations: {
        correct: 'Correct!',
        '4': 'Group by variables.',
        '3': 'Only a and b groups.',
        '1': 'Different variables.',
      },
    },
    {
      id: 'K04_Q4',
      difficulty: 3,
      stem: 'True or False: 3xy² and 5x²y are like terms',
      correct: 'False',
      options: ['False', 'True', 'Sometimes', 'Only if x=y'],
      errorTags: {
        'True': 'partial_matching',
        'Sometimes': 'unclear_thinking',
        'Only if x=y': 'value_confusion',
      },
      explanations: {
        correct: 'Correct!',
        'True': 'Exponents differ.',
        'Sometimes': 'Always definite.',
        'Only if x=y': 'Structure matters.',
      },
    },

    // NEW QUESTIONS

    {
      id: 'K04_Q5',
      difficulty: 1,
      stem: 'Which is a like term to 7y?',
      correct: '−3y',
      options: ['−3y', '7y²', '7x', '3xy'],
      errorTags: {
        '7y²': 'exponent_error',
        '7x': 'variable_error',
        '3xy': 'extra_variable',
      },
      explanations: {
        correct: 'Correct!',
        '7y²': 'Exponent differs.',
        '7x': 'Variable differs.',
        '3xy': 'Extra variable.',
      },
    },

    {
      id: 'K04_Q6',
      difficulty: 1,
      stem: 'Which pair are NOT like terms?',
      correct: '4x and 4y',
      options: ['4x and 4y', '2a and 5a', '−3x and x', '7y and −2y'],
      errorTags: {
        '2a and 5a': 'actually_like_terms',
        '−3x and x': 'actually_like_terms',
        '7y and −2y': 'actually_like_terms',
      },
      explanations: {
        correct: 'Correct!',
        '2a and 5a': 'These ARE like terms.',
        '−3x and x': 'These ARE like terms.',
        '7y and −2y': 'These ARE like terms.',
      },
    },

    {
      id: 'K04_Q7',
      difficulty: 2,
      stem: 'Which of the following are like terms?',
      correct: '5x² and −3x²',
      options: ['5x² and −3x²', '5x² and 5x', 'x² and y²', '2xy and 2x'],
      errorTags: {
        '5x² and 5x': 'different_exponents',
        'x² and y²': 'different_variables',
        '2xy and 2x': 'different_variable_sets',
      },
      explanations: {
        correct: 'Correct!',
        '5x² and 5x': 'Exponent differs.',
        'x² and y²': 'Variable differs.',
        '2xy and 2x': 'Variable sets differ.',
      },
    },

    {
      id: 'K04_Q8',
      difficulty: 2,
      stem: 'How many like-term groups are in: x + y + x² + y²?',
      correct: '4',
      options: ['4', '2', '3', '1'],
      errorTags: {
        '2': 'grouped_wrong',
        '3': 'missed_group',
        '1': 'all_same_error',
      },
      explanations: {
        correct: 'Correct! All terms differ.',
        '2': 'Each term is unique.',
        '3': 'You missed one group.',
        '1': 'All are different.',
      },
    },

    {
      id: 'K04_Q9',
      difficulty: 2,
      stem: 'Which term is like 6ab?',
      correct: '−2ab',
      options: ['−2ab', '6a', '6b', 'ab²'],
      errorTags: {
        '6a': 'missing_variable',
        '6b': 'missing_variable',
        'ab²': 'exponent_error',
      },
      explanations: {
        correct: 'Correct!',
        '6a': 'Missing b.',
        '6b': 'Missing a.',
        'ab²': 'Exponent differs.',
      },
    },

    {
      id: 'K04_Q10',
      difficulty: 3,
      stem: 'Which expression contains ONLY like terms?',
      correct: '2x + 3x − 5x',
      options: ['2x + 3x − 5x', 'x + y + x', 'x² + x + x²', 'xy + x + y'],
      errorTags: {
        'x + y + x': 'mixed_variables',
        'x² + x + x²': 'mixed_exponents',
        'xy + x + y': 'mixed_types',
      },
      explanations: {
        correct: 'Correct!',
        'x + y + x': 'x and y differ.',
        'x² + x + x²': 'Exponents differ.',
        'xy + x + y': 'Different structures.',
      },
    },

    {
      id: 'K04_Q11',
      difficulty: 3,
      stem: 'Which pair are like terms?',
      correct: '4x²y and −3x²y',
      options: ['4x²y and −3x²y', '4x²y and 4xy²', 'x²y and xy', 'xy and yx²'],
      errorTags: {
        '4x²y and 4xy²': 'exponent_swap',
        'x²y and xy': 'missing_exponent',
        'xy and yx²': 'structure_mismatch',
      },
      explanations: {
        correct: 'Correct!',
        '4x²y and 4xy²': 'Exponents differ.',
        'x²y and xy': 'Missing exponent.',
        'xy and yx²': 'Not same structure.',
      },
    },

    {
      id: 'K04_Q12',
      difficulty: 3,
      stem: 'True or False: 2x²y and 2y x² are like terms',
      correct: 'True',
      options: ['True', 'False', 'Sometimes', 'Only if x=1'],
      errorTags: {
        'False': 'order_confusion',
        'Sometimes': 'unclear_logic',
        'Only if x=1': 'value_confusion',
      },
      explanations: {
        correct: 'Correct! Order does not matter: x²y = yx².',
        'False': 'Order doesn’t change term.',
        'Sometimes': 'Always true.',
        'Only if x=1': 'Values don’t matter.',
      },
    },
  ],

  K05: [
    {
      id: 'K05_Q1',
      difficulty: 1,
      stem: 'Simplify: 3m + 4n − m',
      correct: '2m + 4n',
      options: ['2m + 4n', '6mn', '7mn', '3m + 3n'],
      errorTags: {
        '6mn': 'combined_unlike_terms',
        '7mn': 'added_all_numbers',
        '3m + 3n': 'wrong_subtraction',
      },
      explanations: {
        correct: 'Correct!',
        '6mn': 'Cannot combine unlike terms.',
        '7mn': 'Added coefficients incorrectly.',
        '3m + 3n': '3m − m = 2m.',
      },
    },
    {
      id: 'K05_Q2',
      difficulty: 2,
      stem: 'Simplify: 5x + 2x − 3 + 4',
      correct: '7x + 1',
      options: ['7x + 1', '8x + 1', '7x − 1', '7x + 7'],
      errorTags: {
        '8x + 1': 'wrong_x_coefficient',
        '7x − 1': 'wrong_constant_sign',
        '7x + 7': 'wrong_constant',
      },
      explanations: {
        correct: 'Correct!',
        '8x + 1': '5x + 2x = 7x.',
        '7x − 1': '−3 + 4 = +1.',
        '7x + 7': 'Constants add to 1.',
      },
    },
    {
      id: 'K05_Q3',
      difficulty: 2,
      stem: 'Simplify: 4a + 2b − 2a + b − 3',
      correct: '2a + 3b − 3',
      options: ['2a + 3b − 3', '2a + 3b + 3', '4a + 3b − 3', '6ab − 3'],
      errorTags: {
        '2a + 3b + 3': 'sign_error_constant',
        '4a + 3b − 3': 'missed_a_subtraction',
        '6ab − 3': 'combined_unlike_terms',
      },
      explanations: {
        correct: 'Correct!',
        '2a + 3b + 3': 'Constant is −3.',
        '4a + 3b − 3': '4a − 2a = 2a.',
        '6ab − 3': 'Cannot combine a and b.',
      },
    },
    {
      id: 'K05_Q4',
      difficulty: 3,
      stem: 'Simplify: 3x² + 2x − x² − 5x + 4',
      correct: '2x² − 3x + 4',
      options: ['2x² − 3x + 4', '2x² + 7x + 4', '4x² − 3x + 4', '2x² − 3x − 4'],
      errorTags: {
        '2x² + 7x + 4': 'wrong_x_combination',
        '4x² − 3x + 4': 'wrong_squared_combination',
        '2x² − 3x − 4': 'sign_error_constant',
      },
      explanations: {
        correct: 'Correct!',
        '2x² + 7x + 4': '2x − 5x = −3x.',
        '4x² − 3x + 4': '3x² − x² = 2x².',
        '2x² − 3x − 4': 'Constant is +4.',
      },
    },

    // NEW QUESTIONS

    {
      id: 'K05_Q5',
      difficulty: 1,
      stem: 'Simplify: 6x − 2x',
      correct: '4x',
      options: ['4x', '8x', '12x', '4'],
      errorTags: {
        '8x': 'added_instead_subtracted',
        '12x': 'multiplied_instead',
        '4': 'dropped_variable',
      },
      explanations: {
        correct: 'Correct!',
        '8x': 'You added instead of subtracting.',
        '12x': 'Multiplication is incorrect.',
        '4': 'Keep the variable.',
      },
    },

    {
      id: 'K05_Q6',
      difficulty: 1,
      stem: 'Simplify: 2y + 3y',
      correct: '5y',
      options: ['5y', '6y', '5', 'y'],
      errorTags: {
        '6y': 'added_wrong',
        '5': 'lost_variable',
        'y': 'ignored_coefficients',
      },
      explanations: {
        correct: 'Correct!',
        '6y': '2 + 3 = 5, not 6.',
        '5': 'Variable missing.',
        'y': 'Add coefficients.',
      },
    },

    {
      id: 'K05_Q7',
      difficulty: 2,
      stem: 'Simplify: 7a − 3a + 2',
      correct: '4a + 2',
      options: ['4a + 2', '10a + 2', '4a − 2', '9a'],
      errorTags: {
        '10a + 2': 'added_instead_subtracted',
        '4a − 2': 'sign_error',
        '9a': 'ignored_constant',
      },
      explanations: {
        correct: 'Correct!',
        '10a + 2': 'Subtract 3a.',
        '4a − 2': 'Constant is +2.',
        '9a': 'Don’t drop constant.',
      },
    },

    {
      id: 'K05_Q8',
      difficulty: 2,
      stem: 'Simplify: 5x + 2 − 3x + 4',
      correct: '2x + 6',
      options: ['2x + 6', '8x + 6', '2x + 2', '6x + 6'],
      errorTags: {
        '8x + 6': 'wrong_combination',
        '2x + 2': 'wrong_constant',
        '6x + 6': 'added_coefficients',
      },
      explanations: {
        correct: 'Correct!',
        '8x + 6': '5x − 3x = 2x.',
        '2x + 2': '2 + 4 = 6.',
        '6x + 6': '5x − 3x ≠ 6x.',
      },
    },

    {
      id: 'K05_Q9',
      difficulty: 2,
      stem: 'Simplify: 3x + 4y + 2x − y',
      correct: '5x + 3y',
      options: ['5x + 3y', '7xy', '5x + 5y', 'x + 3y'],
      errorTags: {
        '7xy': 'combined_unlike_terms',
        '5x + 5y': 'wrong_y_combination',
        'x + 3y': 'wrong_x_combination',
      },
      explanations: {
        correct: 'Correct!',
        '7xy': 'Cannot combine x and y.',
        '5x + 5y': '4y − y = 3y.',
        'x + 3y': '3x + 2x = 5x.',
      },
    },

    {
      id: 'K05_Q10',
      difficulty: 3,
      stem: 'Simplify: 2x² + 3x² − x²',
      correct: '4x²',
      options: ['4x²', '6x²', '2x²', '4x'],
      errorTags: {
        '6x²': 'added_all',
        '2x²': 'missed_term',
        '4x': 'lost_exponent',
      },
      explanations: {
        correct: 'Correct!',
        '6x²': 'Subtract x².',
        '2x²': 'Combine all terms.',
        '4x': 'Keep exponent.',
      },
    },

    {
      id: 'K05_Q11',
      difficulty: 3,
      stem: 'Simplify: x² + 2x + x² − x',
      correct: '2x² + x',
      options: ['2x² + x', '3x² + x', '2x² + 3x', 'x² + x'],
      errorTags: {
        '3x² + x': 'wrong_squared',
        '2x² + 3x': 'wrong_linear',
        'x² + x': 'missed_terms',
      },
      explanations: {
        correct: 'Correct!',
        '3x² + x': 'x² + x² = 2x².',
        '2x² + 3x': '2x − x = x.',
        'x² + x': 'Combine correctly.',
      },
    },

    {
      id: 'K05_Q12',
      difficulty: 3,
      stem: 'Simplify: 4a + 3 − 2a − 5',
      correct: '2a − 2',
      options: ['2a − 2', '2a + 2', '6a − 2', '2a − 8'],
      errorTags: {
        '2a + 2': 'constant_sign_error',
        '6a − 2': 'wrong_a_combination',
        '2a − 8': 'wrong_constant',
      },
      explanations: {
        correct: 'Correct!',
        '2a + 2': '3 − 5 = −2.',
        '6a − 2': '4a − 2a = 2a.',
        '2a − 8': '3 − 5 = −2.',
      },
    },
  ],

  K06: [
    {
      id: 'K06_Q1',
      difficulty: 1,
      stem: 'Which of the following is an EQUATION?',
      correct: 'x − 4 = 10',
      options: ['x − 4 = 10', 'x − 14', '2x + 5', 'x²'],
      errorTags: {
        'x − 14': 'expression_selected',
        '2x + 5': 'expression_selected',
        'x²': 'term_selected',
      },
      explanations: {
        correct: 'Correct!',
        'x − 14': 'No equals sign.',
        '2x + 5': 'Expression only.',
        'x²': 'Just a term.',
      },
    },
    {
      id: 'K06_Q2',
      difficulty: 1,
      stem: 'What is the key difference between an expression and an equation?',
      correct: 'An equation has an equals sign',
      options: [
        'An equation has an equals sign',
        'An expression is longer',
        'An equation has more variables',
        'An expression cannot have numbers',
      ],
      errorTags: {
        'An expression is longer': 'length_confusion',
        'An equation has more variables': 'variable_count_confusion',
        'An expression cannot have numbers': 'incorrect_statement',
      },
      explanations: {
        correct: 'Correct!',
        'An expression is longer': 'Length doesn’t matter.',
        'An equation has more variables': 'Not always.',
        'An expression cannot have numbers': 'Expressions include numbers.',
      },
    },
    {
      id: 'K06_Q3',
      difficulty: 2,
      stem: 'Which statement correctly classifies: 2x + 3 = 2x + 3?',
      correct: 'It is an equation (always true for all values of x)',
      options: [
        'It is an equation (always true for all values of x)',
        'It is an expression',
        'It is an equation with no solution',
        'It is invalid',
      ],
      errorTags: {
        'It is an expression': 'missed_equals',
        'It is an equation with no solution': 'identity_confusion',
        'It is invalid': 'logic_error',
      },
      explanations: {
        correct: 'Correct!',
        'It is an expression': 'It has = sign.',
        'It is an equation with no solution': 'It has infinite solutions.',
        'It is invalid': 'It is valid.',
      },
    },
    {
      id: 'K06_Q4',
      difficulty: 3,
      stem: 'You can "solve" which of the following?',
      correct: '3x − 5 = 10',
      options: ['3x − 5 = 10', '3x − 5', '3x', '5'],
      errorTags: {
        '3x − 5': 'expression_not_solvable',
        '3x': 'term_only',
        '5': 'constant_only',
      },
      explanations: {
        correct: 'Correct!',
        '3x − 5': 'No equals sign.',
        '3x': 'Not an equation.',
        '5': 'No variable.',
      },
    },

    // NEW QUESTIONS

    {
      id: 'K06_Q5',
      difficulty: 1,
      stem: 'Which of the following is NOT an equation?',
      correct: '2x + 7',
      options: ['2x + 7', 'x = 5', '3 + 4 = 7', 'y − 2 = 0'],
      errorTags: {
        'x = 5': 'equation_misidentified',
        '3 + 4 = 7': 'equation_misidentified',
        'y − 2 = 0': 'equation_misidentified',
      },
      explanations: {
        correct: 'Correct!',
        'x = 5': 'Has equals sign.',
        '3 + 4 = 7': 'Equation.',
        'y − 2 = 0': 'Equation.',
      },
    },

    {
      id: 'K06_Q6',
      difficulty: 1,
      stem: 'Which of these is an expression?',
      correct: '5x + 3',
      options: ['5x + 3', 'x = 3', '2 + 3 = 5', 'y − 1 = 0'],
      errorTags: {
        'x = 3': 'equation_confusion',
        '2 + 3 = 5': 'equation_confusion',
        'y − 1 = 0': 'equation_confusion',
      },
      explanations: {
        correct: 'Correct!',
        'x = 3': 'Equation.',
        '2 + 3 = 5': 'Equation.',
        'y − 1 = 0': 'Equation.',
      },
    },

    {
      id: 'K06_Q7',
      difficulty: 2,
      stem: 'Which of the following has exactly one solution?',
      correct: '2x + 3 = 7',
      options: ['2x + 3 = 7', 'x + 1 = x + 1', '3 = 5', '2x + 3'],
      errorTags: {
        'x + 1 = x + 1': 'infinite_solutions',
        '3 = 5': 'no_solution',
        '2x + 3': 'not_equation',
      },
      explanations: {
        correct: 'Correct!',
        'x + 1 = x + 1': 'True for all x.',
        '3 = 5': 'Never true.',
        '2x + 3': 'Not equation.',
      },
    },

    {
      id: 'K06_Q8',
      difficulty: 2,
      stem: 'Which of these is always true?',
      correct: 'x + 2 = x + 2',
      options: ['x + 2 = x + 2', 'x + 2 = x + 3', '2x = x', 'x = 5'],
      errorTags: {
        'x + 2 = x + 3': 'false_equation',
        '2x = x': 'conditional_solution',
        'x = 5': 'specific_solution',
      },
      explanations: {
        correct: 'Correct!',
        'x + 2 = x + 3': 'Never true.',
        '2x = x': 'Only true for x=0.',
        'x = 5': 'Only one value.',
      },
    },

    {
      id: 'K06_Q9',
      difficulty: 2,
      stem: 'Which statement is FALSE?',
      correct: 'Expressions can be solved',
      options: [
        'Expressions can be solved',
        'Equations can be solved',
        'Expressions can be simplified',
        'Equations have equals sign',
      ],
      errorTags: {
        'Equations can be solved': 'true_statement',
        'Expressions can be simplified': 'true_statement',
        'Equations have equals sign': 'true_statement',
      },
      explanations: {
        correct: 'Correct!',
        'Equations can be solved': 'True.',
        'Expressions can be simplified': 'True.',
        'Equations have equals sign': 'True.',
      },
    },

    {
      id: 'K06_Q10',
      difficulty: 3,
      stem: 'Which of the following is an identity?',
      correct: 'x + 5 = x + 5',
      options: ['x + 5 = x + 5', 'x + 5 = x + 6', '2x = x', 'x = 3'],
      errorTags: {
        'x + 5 = x + 6': 'false_equation',
        '2x = x': 'conditional',
        'x = 3': 'single_solution',
      },
      explanations: {
        correct: 'Correct!',
        'x + 5 = x + 6': 'Not true.',
        '2x = x': 'Only for x=0.',
        'x = 3': 'One solution only.',
      },
    },

    {
      id: 'K06_Q11',
      difficulty: 3,
      stem: 'Which of the following has NO solution?',
      correct: 'x + 2 = x + 5',
      options: ['x + 2 = x + 5', 'x + 2 = x + 2', '2x = 6', 'x = 3'],
      errorTags: {
        'x + 2 = x + 2': 'infinite_solution',
        '2x = 6': 'one_solution',
        'x = 3': 'one_solution',
      },
      explanations: {
        correct: 'Correct!',
        'x + 2 = x + 2': 'Always true.',
        '2x = 6': 'Has solution.',
        'x = 3': 'Has solution.',
      },
    },

    {
      id: 'K06_Q12',
      difficulty: 3,
      stem: 'Which statement is correct?',
      correct: 'Equations can have one, none, or infinite solutions',
      options: [
        'Equations can have one, none, or infinite solutions',
        'All equations have one solution',
        'Expressions can be solved',
        'Equations never have infinite solutions',
      ],
      errorTags: {
        'All equations have one solution': 'overgeneralization',
        'Expressions can be solved': 'concept_error',
        'Equations never have infinite solutions': 'identity_misunderstanding',
      },
      explanations: {
        correct: 'Correct!',
        'All equations have one solution': 'Not always.',
        'Expressions can be solved': 'Expressions are simplified.',
        'Equations never have infinite solutions': 'Identities exist.',
      },
    },
  ],

  K07: [
    {
      id: 'K07_Q1',
      difficulty: 1,
      stem: 'If you add 5 to the LEFT side of an equation, what must you do to the RIGHT side?',
      correct: 'Add 5',
      options: ['Add 5', 'Subtract 5', 'Multiply by 5', 'Do nothing'],
      errorTags: {
        'Subtract 5': 'inverse_confusion',
        'Multiply by 5': 'wrong_operation',
        'Do nothing': 'balance_forgotten',
      },
      explanations: {
        correct: 'Correct!',
        'Subtract 5': 'Must do SAME operation.',
        'Multiply by 5': 'Wrong operation.',
        'Do nothing': 'Breaks balance.',
      },
    },
    {
      id: 'K07_Q2',
      difficulty: 1,
      stem: 'The equals sign in an equation is like:',
      correct: 'The pivot of a balanced scale',
      options: [
        'The pivot of a balanced scale',
        'A question mark',
        'The finish line of a race',
        'A dividing wall',
      ],
      errorTags: {
        'A question mark': 'wrong_analogy',
        'The finish line of a race': 'wrong_analogy',
        'A dividing wall': 'wrong_analogy',
      },
      explanations: {
        correct: 'Correct!',
        'A question mark': 'Not asking.',
        'The finish line of a race': 'Not a race.',
        'A dividing wall': 'Represents equality.',
      },
    },
    {
      id: 'K07_Q3',
      difficulty: 2,
      stem: 'If you MULTIPLY both sides of x = 3 by 4, what do you get?',
      correct: '4x = 12',
      options: ['4x = 12', 'x = 12', '4x = 3', 'x + 4 = 7'],
      errorTags: {
        'x = 12': 'left_side_not_multiplied',
        '4x = 3': 'right_side_not_multiplied',
        'x + 4 = 7': 'wrong_operation',
      },
      explanations: {
        correct: 'Correct!',
        'x = 12': 'Multiply both sides.',
        '4x = 3': 'Multiply right side too.',
        'x + 4 = 7': 'Wrong operation.',
      },
    },
    {
      id: 'K07_Q4',
      difficulty: 3,
      stem: 'You divide the LEFT side of an equation by 3 but multiply the RIGHT by 3. The equation is now:',
      correct: 'Unbalanced (broken)',
      options: [
        'Unbalanced (broken)',
        'Still balanced because you did something to both sides',
        'More balanced than before',
        'Balanced because 3÷3=1',
      ],
      errorTags: {
        'Still balanced because you did something to both sides': 'operation_mismatch',
        'More balanced than before': 'nonsense',
        'Balanced because 3÷3=1': 'incorrect_reasoning',
      },
      explanations: {
        correct: 'Correct!',
        'Still balanced because you did something to both sides': 'Must be SAME operation.',
        'More balanced than before': 'Invalid idea.',
        'Balanced because 3÷3=1': 'Operations differ.',
      },
    },

    // NEW QUESTIONS

    {
      id: 'K07_Q5',
      difficulty: 1,
      stem: 'If you subtract 2 from both sides of an equation, what happens?',
      correct: 'The equation remains balanced',
      options: [
        'The equation remains balanced',
        'The equation becomes false',
        'Only one side changes',
        'The variable disappears',
      ],
      errorTags: {
        'The equation becomes false': 'misunderstanding_balance',
        'Only one side changes': 'balance_violation',
        'The variable disappears': 'variable_confusion',
      },
      explanations: {
        correct: 'Correct!',
        'The equation becomes false': 'Balance is preserved.',
        'Only one side changes': 'Both sides change.',
        'The variable disappears': 'Variable remains.',
      },
    },

    {
      id: 'K07_Q6',
      difficulty: 1,
      stem: 'What happens if you add different numbers to each side of an equation?',
      correct: 'The equation becomes unbalanced',
      options: [
        'The equation becomes unbalanced',
        'The equation stays the same',
        'The variable cancels out',
        'Nothing changes',
      ],
      errorTags: {
        'The equation stays the same': 'balance_misconception',
        'The variable cancels out': 'irrelevant_reasoning',
        'Nothing changes': 'no_effect_error',
      },
      explanations: {
        correct: 'Correct!',
        'The equation stays the same': 'Different operations break equality.',
        'The variable cancels out': 'Not related.',
        'Nothing changes': 'Equation changes.',
      },
    },

    {
      id: 'K07_Q7',
      difficulty: 2,
      stem: 'If x = 5, what happens when you subtract 3 from both sides?',
      correct: 'x − 3 = 2',
      options: ['x − 3 = 2', 'x = 2', 'x − 3 = 5', 'x = 8'],
      errorTags: {
        'x = 2': 'left_side_unchanged',
        'x − 3 = 5': 'right_side_unchanged',
        'x = 8': 'added_instead',
      },
      explanations: {
        correct: 'Correct!',
        'x = 2': 'Left side must change.',
        'x − 3 = 5': 'Right side must change.',
        'x = 8': 'Wrong operation.',
      },
    },

    {
      id: 'K07_Q8',
      difficulty: 2,
      stem: 'Which operation keeps an equation balanced?',
      correct: 'Doing the same operation on both sides',
      options: [
        'Doing the same operation on both sides',
        'Doing inverse operations on each side',
        'Changing only one side',
        'Ignoring constants',
      ],
      errorTags: {
        'Doing inverse operations on each side': 'inverse_confusion',
        'Changing only one side': 'balance_violation',
        'Ignoring constants': 'irrelevant',
      },
      explanations: {
        correct: 'Correct!',
        'Doing inverse operations on each side': 'Must be same operation.',
        'Changing only one side': 'Breaks equality.',
        'Ignoring constants': 'Not valid.',
      },
    },

    {
      id: 'K07_Q9',
      difficulty: 2,
      stem: 'If you divide both sides of 2x = 10 by 2, what do you get?',
      correct: 'x = 5',
      options: ['x = 5', '2x = 5', 'x = 10', 'x = 20'],
      errorTags: {
        '2x = 5': 'left_side_not_divided',
        'x = 10': 'right_side_not_divided',
        'x = 20': 'multiplied_instead',
      },
      explanations: {
        correct: 'Correct!',
        '2x = 5': 'Divide both sides.',
        'x = 10': 'Right side must be divided.',
        'x = 20': 'Wrong operation.',
      },
    },

    {
      id: 'K07_Q10',
      difficulty: 3,
      stem: 'Which action will break an equation?',
      correct: 'Adding 3 to one side only',
      options: [
        'Adding 3 to one side only',
        'Adding 3 to both sides',
        'Multiplying both sides by 2',
        'Dividing both sides by 4',
      ],
      errorTags: {
        'Adding 3 to both sides': 'valid_operation',
        'Multiplying both sides by 2': 'valid_operation',
        'Dividing both sides by 4': 'valid_operation',
      },
      explanations: {
        correct: 'Correct!',
        'Adding 3 to both sides': 'Valid.',
        'Multiplying both sides by 2': 'Valid.',
        'Dividing both sides by 4': 'Valid.',
      },
    },

    {
      id: 'K07_Q11',
      difficulty: 3,
      stem: 'If 3x = 9, what happens if you divide only the right side by 3?',
      correct: 'Equation becomes incorrect',
      options: [
        'Equation becomes incorrect',
        'x = 3',
        'Equation stays balanced',
        'x = 1',
      ],
      errorTags: {
        'x = 3': 'partial_operation',
        'Equation stays balanced': 'balance_error',
        'x = 1': 'wrong_calculation',
      },
      explanations: {
        correct: 'Correct!',
        'x = 3': 'Must divide both sides.',
        'Equation stays balanced': 'Balance broken.',
        'x = 1': 'Incorrect math.',
      },
    },

    {
      id: 'K07_Q12',
      difficulty: 3,
      stem: 'Why must both sides of an equation be treated equally?',
      correct: 'To maintain equality',
      options: [
        'To maintain equality',
        'To make solving faster',
        'To simplify only one side',
        'To remove variables',
      ],
      errorTags: {
        'To make solving faster': 'irrelevant_reason',
        'To simplify only one side': 'balance_violation',
        'To remove variables': 'misconception',
      },
      explanations: {
        correct: 'Correct!',
        'To make solving faster': 'Not the reason.',
        'To simplify only one side': 'Breaks balance.',
        'To remove variables': 'Not purpose.',
      },
    },
  ],

  K08: [
    {
      id: 'K08_Q1',
      difficulty: 1,
      stem: 'Solve: x + 7 = 15',
      correct: 'x = 8',
      options: ['x = 8', 'x = 22', 'x = 7', 'x = 15'],
      errorTags: {
        'x = 22': 'added_instead_subtracted',
        'x = 7': 'used_coefficient',
        'x = 15': 'ignored_left_side',
      },
      explanations: {
        correct: 'Correct!',
        'x = 22': 'Subtract 7, don’t add.',
        'x = 7': 'Check by substitution.',
        'x = 15': 'Ignored +7.',
      },
    },
    {
      id: 'K08_Q2',
      difficulty: 1,
      stem: 'Solve: y − 4 = 10',
      correct: 'y = 14',
      options: ['y = 14', 'y = 6', 'y = 40', 'y = −6'],
      errorTags: {
        'y = 6': 'subtracted_instead_added',
        'y = 40': 'multiplied_instead_added',
        'y = −6': 'sign_error',
      },
      explanations: {
        correct: 'Correct!',
        'y = 6': 'Add 4, don’t subtract.',
        'y = 40': 'Wrong operation.',
        'y = −6': 'Sign mistake.',
      },
    },
    {
      id: 'K08_Q3',
      difficulty: 2,
      stem: 'Solve: 15 = n + 8',
      correct: 'n = 7',
      options: ['n = 7', 'n = 23', 'n = 8', 'n = −7'],
      errorTags: {
        'n = 23': 'added_instead_subtracted',
        'n = 8': 'used_constant',
        'n = −7': 'sign_error',
      },
      explanations: {
        correct: 'Correct!',
        'n = 23': 'Subtract 8.',
        'n = 8': 'Check equation.',
        'n = −7': 'No negative here.',
      },
    },
    {
      id: 'K08_Q4',
      difficulty: 3,
      stem: 'Solve: x + (−3) = −10',
      correct: 'x = −7',
      options: ['x = −7', 'x = −13', 'x = 7', 'x = 13'],
      errorTags: {
        'x = −13': 'added_wrong',
        'x = 7': 'ignored_negative',
        'x = 13': 'double_sign_error',
      },
      explanations: {
        correct: 'Correct!',
        'x = −13': 'Add +3 instead.',
        'x = 7': 'Sign mistake.',
        'x = 13': 'Check carefully.',
      },
    },

    // NEW QUESTIONS

    {
      id: 'K08_Q5',
      difficulty: 1,
      stem: 'Solve: x + 5 = 9',
      correct: 'x = 4',
      options: ['x = 4', 'x = 14', 'x = 5', 'x = 9'],
      errorTags: {
        'x = 14': 'added_instead',
        'x = 5': 'used_constant',
        'x = 9': 'ignored_equation',
      },
      explanations: {
        correct: 'Correct!',
        'x = 14': 'Subtract 5.',
        'x = 5': 'Check substitution.',
        'x = 9': 'Solve properly.',
      },
    },

    {
      id: 'K08_Q6',
      difficulty: 1,
      stem: 'Solve: z − 6 = 2',
      correct: 'z = 8',
      options: ['z = 8', 'z = −4', 'z = 12', 'z = 6'],
      errorTags: {
        'z = −4': 'subtracted_wrong',
        'z = 12': 'added_wrong',
        'z = 6': 'used_constant',
      },
      explanations: {
        correct: 'Correct!',
        'z = −4': 'Add 6, don’t subtract.',
        'z = 12': 'Wrong arithmetic.',
        'z = 6': 'Check solution.',
      },
    },

    {
      id: 'K08_Q7',
      difficulty: 2,
      stem: 'Solve: x − 9 = 3',
      correct: 'x = 12',
      options: ['x = 12', 'x = −6', 'x = 6', 'x = 9'],
      errorTags: {
        'x = −6': 'sign_error',
        'x = 6': 'subtracted_instead_added',
        'x = 9': 'ignored_equation',
      },
      explanations: {
        correct: 'Correct!',
        'x = −6': 'Add 9.',
        'x = 6': 'Wrong operation.',
        'x = 9': 'Check equation.',
      },
    },

    {
      id: 'K08_Q8',
      difficulty: 2,
      stem: 'Solve: 20 = x − 5',
      correct: 'x = 25',
      options: ['x = 25', 'x = 15', 'x = −25', 'x = 5'],
      errorTags: {
        'x = 15': 'subtracted_instead_added',
        'x = −25': 'sign_error',
        'x = 5': 'used_constant',
      },
      explanations: {
        correct: 'Correct!',
        'x = 15': 'Add 5.',
        'x = −25': 'Wrong sign.',
        'x = 5': 'Check substitution.',
      },
    },

    {
      id: 'K08_Q9',
      difficulty: 2,
      stem: 'Solve: x + 12 = 5',
      correct: 'x = −7',
      options: ['x = −7', 'x = 7', 'x = 17', 'x = −17'],
      errorTags: {
        'x = 7': 'ignored_negative',
        'x = 17': 'added_instead',
        'x = −17': 'double_subtraction',
      },
      explanations: {
        correct: 'Correct!',
        'x = 7': '5 − 12 = −7.',
        'x = 17': 'Wrong operation.',
        'x = −17': 'Arithmetic error.',
      },
    },

    {
      id: 'K08_Q10',
      difficulty: 3,
      stem: 'Solve: x − (−4) = 10',
      correct: 'x = 6',
      options: ['x = 6', 'x = 14', 'x = −6', 'x = −14'],
      errorTags: {
        'x = 14': 'ignored_double_negative',
        'x = −6': 'sign_error',
        'x = −14': 'wrong_operation',
      },
      explanations: {
        correct: 'Correct!',
        'x = 14': '−(−4) = +4.',
        'x = −6': 'Sign mistake.',
        'x = −14': 'Wrong steps.',
      },
    },

    {
      id: 'K08_Q11',
      difficulty: 3,
      stem: 'Solve: −3 + x = −10',
      correct: 'x = −7',
      options: ['x = −7', 'x = 7', 'x = −13', 'x = 13'],
      errorTags: {
        'x = 7': 'ignored_negative',
        'x = −13': 'subtracted_wrong',
        'x = 13': 'double_sign_error',
      },
      explanations: {
        correct: 'Correct!',
        'x = 7': 'Add 3.',
        'x = −13': 'Wrong direction.',
        'x = 13': 'Sign confusion.',
      },
    },

    {
      id: 'K08_Q12',
      difficulty: 3,
      stem: 'Solve: x + 0 = 9',
      correct: 'x = 9',
      options: ['x = 9', 'x = 0', 'x = 1', 'x = −9'],
      errorTags: {
        'x = 0': 'ignored_identity',
        'x = 1': 'random_guess',
        'x = −9': 'sign_error',
      },
      explanations: {
        correct: 'Correct!',
        'x = 0': 'Adding 0 changes nothing.',
        'x = 1': 'Check equation.',
        'x = −9': 'Wrong sign.',
      },
    },
  ],

  K09: [
    {
      id: 'K09_Q1',
      difficulty: 1,
      stem: 'Solve: 4y = 20',
      correct: 'y = 5',
      options: ['y = 5', 'y = 80', 'y = 24', 'y = 16'],
      errorTags: {
        'y = 80': 'multiplied_instead_divided',
        'y = 24': 'added_instead_divided',
        'y = 16': 'subtracted_instead_divided',
      },
      explanations: {
        correct: 'Correct!',
        'y = 80': 'Divide by 4, don’t multiply.',
        'y = 24': 'Addition doesn’t undo multiplication.',
        'y = 16': 'Subtraction is incorrect.',
      },
    },
    {
      id: 'K09_Q2',
      difficulty: 1,
      stem: 'Solve: m/3 = 6',
      correct: 'm = 18',
      options: ['m = 18', 'm = 2', 'm = 9', 'm = 3'],
      errorTags: {
        'm = 2': 'divided_instead_multiplied',
        'm = 9': 'added_instead_multiplied',
        'm = 3': 'used_divisor',
      },
      explanations: {
        correct: 'Correct!',
        'm = 2': 'Multiply by 3.',
        'm = 9': 'Addition is wrong.',
        'm = 3': 'Multiply 6×3.',
      },
    },
    {
      id: 'K09_Q3',
      difficulty: 2,
      stem: 'Solve: −5p = 30',
      correct: 'p = −6',
      options: ['p = −6', 'p = 6', 'p = −150', 'p = 25'],
      errorTags: {
        'p = 6': 'ignored_negative',
        'p = −150': 'multiplied_instead_divided',
        'p = 25': 'subtracted_instead_divided',
      },
      explanations: {
        correct: 'Correct!',
        'p = 6': 'Sign matters.',
        'p = −150': 'Divide, don’t multiply.',
        'p = 25': 'Wrong operation.',
      },
    },
    {
      id: 'K09_Q4',
      difficulty: 3,
      stem: 'Solve: x/−2 = 7',
      correct: 'x = −14',
      options: ['x = −14', 'x = 14', 'x = −9', 'x = 3.5'],
      errorTags: {
        'x = 14': 'ignored_negative',
        'x = −9': 'wrong_operation',
        'x = 3.5': 'divided_again',
      },
      explanations: {
        correct: 'Correct!',
        'x = 14': 'Negative matters.',
        'x = −9': 'Multiply instead.',
        'x = 3.5': 'Do inverse operation.',
      },
    },

    // NEW QUESTIONS

    {
      id: 'K09_Q5',
      difficulty: 1,
      stem: 'Solve: 6x = 42',
      correct: 'x = 7',
      options: ['x = 7', 'x = 48', 'x = 36', 'x = 6'],
      errorTags: {
        'x = 48': 'added_instead',
        'x = 36': 'multiplied_instead',
        'x = 6': 'used_coefficient',
      },
      explanations: {
        correct: 'Correct!',
        'x = 48': 'Divide 42 by 6.',
        'x = 36': 'Wrong operation.',
        'x = 6': 'Check equation.',
      },
    },

    {
      id: 'K09_Q6',
      difficulty: 1,
      stem: 'Solve: x/5 = 3',
      correct: 'x = 15',
      options: ['x = 15', 'x = 8', 'x = 3', 'x = 5'],
      errorTags: {
        'x = 8': 'added_instead',
        'x = 3': 'ignored_operation',
        'x = 5': 'used_divisor',
      },
      explanations: {
        correct: 'Correct!',
        'x = 8': 'Multiply by 5.',
        'x = 3': 'Operation ignored.',
        'x = 5': 'Wrong step.',
      },
    },

    {
      id: 'K09_Q7',
      difficulty: 2,
      stem: 'Solve: 8y = −32',
      correct: 'y = −4',
      options: ['y = −4', 'y = 4', 'y = −24', 'y = 24'],
      errorTags: {
        'y = 4': 'sign_error',
        'y = −24': 'multiplied_instead',
        'y = 24': 'double_error',
      },
      explanations: {
        correct: 'Correct!',
        'y = 4': 'Sign matters.',
        'y = −24': 'Divide instead.',
        'y = 24': 'Check signs.',
      },
    },

    {
      id: 'K09_Q8',
      difficulty: 2,
      stem: 'Solve: x/4 = −6',
      correct: 'x = −24',
      options: ['x = −24', 'x = 24', 'x = −2', 'x = −10'],
      errorTags: {
        'x = 24': 'sign_error',
        'x = −2': 'divided_again',
        'x = −10': 'wrong_operation',
      },
      explanations: {
        correct: 'Correct!',
        'x = 24': 'Negative matters.',
        'x = −2': 'Multiply, don’t divide.',
        'x = −10': 'Wrong arithmetic.',
      },
    },

    {
      id: 'K09_Q9',
      difficulty: 2,
      stem: 'Solve: −3x = −15',
      correct: 'x = 5',
      options: ['x = 5', 'x = −5', 'x = 12', 'x = −12'],
      errorTags: {
        'x = −5': 'sign_error',
        'x = 12': 'added_instead',
        'x = −12': 'wrong_operation',
      },
      explanations: {
        correct: 'Correct!',
        'x = −5': 'Negative cancels.',
        'x = 12': 'Divide instead.',
        'x = −12': 'Check calculation.',
      },
    },

    {
      id: 'K09_Q10',
      difficulty: 3,
      stem: 'Solve: 0.5x = 6',
      correct: 'x = 12',
      options: ['x = 12', 'x = 3', 'x = 6.5', 'x = 18'],
      errorTags: {
        'x = 3': 'multiplied_instead',
        'x = 6.5': 'added_instead',
        'x = 18': 'wrong_factor',
      },
      explanations: {
        correct: 'Correct!',
        'x = 3': 'Divide by 0.5 or multiply by 2.',
        'x = 6.5': 'Wrong operation.',
        'x = 18': 'Incorrect math.',
      },
    },

    {
      id: 'K09_Q11',
      difficulty: 3,
      stem: 'Solve: x/−4 = −3',
      correct: 'x = 12',
      options: ['x = 12', 'x = −12', 'x = 7', 'x = −7'],
      errorTags: {
        'x = −12': 'sign_error',
        'x = 7': 'wrong_operation',
        'x = −7': 'wrong_calculation',
      },
      explanations: {
        correct: 'Correct!',
        'x = −12': 'Negative × negative = positive.',
        'x = 7': 'Multiply properly.',
        'x = −7': 'Arithmetic error.',
      },
    },

    {
      id: 'K09_Q12',
      difficulty: 3,
      stem: 'Solve: 10x = 0',
      correct: 'x = 0',
      options: ['x = 0', 'x = 10', 'x = 1', 'x = −10'],
      errorTags: {
        'x = 10': 'misunderstood_zero',
        'x = 1': 'random_guess',
        'x = −10': 'sign_error',
      },
      explanations: {
        correct: 'Correct!',
        'x = 10': '10×10 ≠ 0.',
        'x = 1': 'Check equation.',
        'x = −10': 'Still not zero.',
      },
    },
  ],

  K10: [
    {
      id: 'K10_Q1',
      difficulty: 1,
      stem: 'Solve: p/4 = 2',
      correct: 'p = 8',
      options: ['p = 8', 'p = 0.5', 'p = 6', 'p = 2'],
      errorTags: {
        'p = 0.5': 'divided_instead_multiplied',
        'p = 6': 'subtracted',
        'p = 2': 'ignored_equation',
      },
      explanations: {
        correct: 'Correct!',
        'p = 0.5': 'Multiply by 4.',
        'p = 6': 'Wrong operation.',
        'p = 2': 'Check equation.',
      },
    },
    {
      id: 'K10_Q2',
      difficulty: 2,
      stem: 'Solve: −x = 9',
      correct: 'x = −9',
      options: ['x = −9', 'x = 9', 'x = −1', 'x = 1/9'],
      errorTags: {
        'x = 9': 'ignored_negative',
        'x = −1': 'wrong_operation',
        'x = 1/9': 'reciprocal_error',
      },
      explanations: {
        correct: 'Correct!',
        'x = 9': 'Sign matters.',
        'x = −1': 'Wrong calculation.',
        'x = 1/9': 'No reciprocal here.',
      },
    },
    {
      id: 'K10_Q3',
      difficulty: 2,
      stem: 'Solve: 3 + a = 11',
      correct: 'a = 8',
      options: ['a = 8', 'a = 14', 'a = 11', 'a = 3'],
      errorTags: {
        'a = 14': 'added_instead_subtracted',
        'a = 11': 'ignored_constant',
        'a = 3': 'used_constant',
      },
      explanations: {
        correct: 'Correct!',
        'a = 14': 'Subtract 3.',
        'a = 11': 'Check equation.',
        'a = 3': 'Wrong value.',
      },
    },
    {
      id: 'K10_Q4',
      difficulty: 3,
      stem: 'Solve: 0.5n = 12',
      correct: 'n = 24',
      options: ['n = 24', 'n = 6', 'n = 11.5', 'n = 12.5'],
      errorTags: {
        'n = 6': 'multiplied_instead_divided',
        'n = 11.5': 'subtracted',
        'n = 12.5': 'added',
      },
      explanations: {
        correct: 'Correct!',
        'n = 6': 'Divide by 0.5.',
        'n = 11.5': 'Wrong operation.',
        'n = 12.5': 'Wrong operation.',
      },
    },

    // NEW QUESTIONS

    {
      id: 'K10_Q5',
      difficulty: 1,
      stem: 'Solve: 2x = 10',
      correct: 'x = 5',
      options: ['x = 5', 'x = 20', 'x = 8', 'x = 2'],
      errorTags: {
        'x = 20': 'multiplied_instead',
        'x = 8': 'subtracted',
        'x = 2': 'used_coefficient',
      },
      explanations: {
        correct: 'Correct!',
        'x = 20': 'Divide by 2.',
        'x = 8': 'Wrong operation.',
        'x = 2': 'Check equation.',
      },
    },

    {
      id: 'K10_Q6',
      difficulty: 1,
      stem: 'Solve: x − 6 = 4',
      correct: 'x = 10',
      options: ['x = 10', 'x = −2', 'x = 24', 'x = 6'],
      errorTags: {
        'x = −2': 'subtracted_instead_added',
        'x = 24': 'multiplied',
        'x = 6': 'used_constant',
      },
      explanations: {
        correct: 'Correct!',
        'x = −2': 'Add 6.',
        'x = 24': 'Wrong operation.',
        'x = 6': 'Check equation.',
      },
    },

    {
      id: 'K10_Q7',
      difficulty: 2,
      stem: 'Solve: 5x = −25',
      correct: 'x = −5',
      options: ['x = −5', 'x = 5', 'x = −20', 'x = 30'],
      errorTags: {
        'x = 5': 'sign_error',
        'x = −20': 'subtracted',
        'x = 30': 'added',
      },
      explanations: {
        correct: 'Correct!',
        'x = 5': 'Negative matters.',
        'x = −20': 'Wrong operation.',
        'x = 30': 'Wrong operation.',
      },
    },

    {
      id: 'K10_Q8',
      difficulty: 2,
      stem: 'Solve: x/2 = 7',
      correct: 'x = 14',
      options: ['x = 14', 'x = 3.5', 'x = 9', 'x = 2'],
      errorTags: {
        'x = 3.5': 'divided_again',
        'x = 9': 'added',
        'x = 2': 'used_divisor',
      },
      explanations: {
        correct: 'Correct!',
        'x = 3.5': 'Multiply by 2.',
        'x = 9': 'Wrong operation.',
        'x = 2': 'Incorrect.',
      },
    },

    {
      id: 'K10_Q9',
      difficulty: 2,
      stem: 'Solve: −2x = 8',
      correct: 'x = −4',
      options: ['x = −4', 'x = 4', 'x = −10', 'x = 6'],
      errorTags: {
        'x = 4': 'ignored_negative',
        'x = −10': 'subtracted',
        'x = 6': 'wrong_calculation',
      },
      explanations: {
        correct: 'Correct!',
        'x = 4': 'Sign matters.',
        'x = −10': 'Wrong operation.',
        'x = 6': 'Check math.',
      },
    },

    {
      id: 'K10_Q10',
      difficulty: 3,
      stem: 'Solve: 3x = 0',
      correct: 'x = 0',
      options: ['x = 0', 'x = 3', 'x = 1', 'x = −3'],
      errorTags: {
        'x = 3': 'misunderstood_zero',
        'x = 1': 'random_guess',
        'x = −3': 'sign_error',
      },
      explanations: {
        correct: 'Correct!',
        'x = 3': '3×3 ≠ 0.',
        'x = 1': 'Check equation.',
        'x = −3': 'Still not zero.',
      },
    },

    {
      id: 'K10_Q11',
      difficulty: 3,
      stem: 'Solve: x/0.5 = 10',
      correct: 'x = 5',
      options: ['x = 5', 'x = 20', 'x = 0.5', 'x = 15'],
      errorTags: {
        'x = 20': 'multiplied_wrong',
        'x = 0.5': 'divided_wrong',
        'x = 15': 'added',
      },
      explanations: {
        correct: 'Correct!',
        'x = 20': 'Multiply by 0.5.',
        'x = 0.5': 'Wrong direction.',
        'x = 15': 'Wrong operation.',
      },
    },

    {
      id: 'K10_Q12',
      difficulty: 3,
      stem: 'Solve: −x/2 = 6',
      correct: 'x = −12',
      options: ['x = −12', 'x = 12', 'x = −3', 'x = 3'],
      errorTags: {
        'x = 12': 'sign_error',
        'x = −3': 'divided_wrong',
        'x = 3': 'wrong_operation',
      },
      explanations: {
        correct: 'Correct!',
        'x = 12': 'Sign matters.',
        'x = −3': 'Multiply by 2.',
        'x = 3': 'Incorrect.',
      },
    },
  ],

  K11: [
    {
      id: 'K11_Q1',
      difficulty: 1,
      stem: 'Solve: 2x + 1 = 9',
      correct: 'x = 4',
      options: ['x = 4', 'x = 5', 'x = 2', 'x = 10'],
      errorTags: {
        'x = 5': 'divided_first_error',
        'x = 2': 'subtracted_wrong',
        'x = 10': 'added_instead_subtracted',
      },
      explanations: {
        correct: 'Correct!',
        'x = 5': 'Subtract first, then divide.',
        'x = 2': 'Wrong subtraction.',
        'x = 10': 'Use inverse operation.',
      },
    },
    {
      id: 'K11_Q2',
      difficulty: 2,
      stem: 'Solve: 2p − 3 = 7',
      correct: 'p = 5',
      options: ['p = 5', 'p = 2', 'p = 7', 'p = 4'],
      errorTags: {
        'p = 2': 'order_error',
        'p = 7': 'skipped_step',
        'p = 4': 'wrong_subtraction',
      },
      explanations: {
        correct: 'Correct!',
        'p = 2': 'Wrong order.',
        'p = 7': 'Missing division.',
        'p = 4': 'Check substitution.',
      },
    },
    {
      id: 'K11_Q3',
      difficulty: 2,
      stem: 'Solve: 3n + 2 = 14',
      correct: 'n = 4',
      options: ['n = 4', 'n = 16/3', 'n = 5.3', 'n = 6'],
      errorTags: {
        'n = 16/3': 'divided_first',
        'n = 5.3': 'calculation_error',
        'n = 6': 'wrong_step',
      },
      explanations: {
        correct: 'Correct!',
        'n = 16/3': 'Subtract first.',
        'n = 5.3': 'Arithmetic error.',
        'n = 6': 'Check work.',
      },
    },
    {
      id: 'K11_Q4',
      difficulty: 3,
      stem: 'Solve: 5 − 2x = 11',
      correct: 'x = −3',
      options: ['x = −3', 'x = 3', 'x = 8', 'x = −8'],
      errorTags: {
        'x = 3': 'ignored_negative',
        'x = 8': 'added_instead',
        'x = −8': 'division_error',
      },
      explanations: {
        correct: 'Correct!',
        'x = 3': 'Sign matters.',
        'x = 8': 'Subtract first.',
        'x = −8': 'Arithmetic mistake.',
      },
    },

    // NEW QUESTIONS

    {
      id: 'K11_Q5',
      difficulty: 1,
      stem: 'Solve: 3x + 2 = 11',
      correct: 'x = 3',
      options: ['x = 3', 'x = 9', 'x = 13', 'x = 1'],
      errorTags: {
        'x = 9': 'divided_first',
        'x = 13': 'added_instead',
        'x = 1': 'wrong_subtraction',
      },
      explanations: {
        correct: 'Correct!',
        'x = 9': 'Subtract first.',
        'x = 13': 'Use inverse.',
        'x = 1': 'Check work.',
      },
    },

    {
      id: 'K11_Q6',
      difficulty: 1,
      stem: 'Solve: 4x − 4 = 12',
      correct: 'x = 4',
      options: ['x = 4', 'x = 3', 'x = 16', 'x = 8'],
      errorTags: {
        'x = 3': 'subtracted_wrong',
        'x = 16': 'skipped_division',
        'x = 8': 'wrong_division',
      },
      explanations: {
        correct: 'Correct!',
        'x = 3': 'Add 4 first.',
        'x = 16': 'Divide by 4.',
        'x = 8': 'Check calculation.',
      },
    },

    {
      id: 'K11_Q7',
      difficulty: 2,
      stem: 'Solve: 2x + 5 = 1',
      correct: 'x = −2',
      options: ['x = −2', 'x = 2', 'x = −3', 'x = 3'],
      errorTags: {
        'x = 2': 'ignored_negative',
        'x = −3': 'wrong_arithmetic',
        'x = 3': 'added_instead',
      },
      explanations: {
        correct: 'Correct!',
        'x = 2': 'Sign matters.',
        'x = −3': 'Arithmetic error.',
        'x = 3': 'Subtract 5.',
      },
    },

    {
      id: 'K11_Q8',
      difficulty: 2,
      stem: 'Solve: 6x − 2 = 10',
      correct: 'x = 2',
      options: ['x = 2', 'x = 8', 'x = 12', 'x = 1'],
      errorTags: {
        'x = 8': 'skipped_division',
        'x = 12': 'added_instead',
        'x = 1': 'wrong_division',
      },
      explanations: {
        correct: 'Correct!',
        'x = 8': 'Divide by 6.',
        'x = 12': 'Add correctly.',
        'x = 1': 'Check steps.',
      },
    },

    {
      id: 'K11_Q9',
      difficulty: 2,
      stem: 'Solve: 7x + 3 = 3',
      correct: 'x = 0',
      options: ['x = 0', 'x = 3', 'x = −3', 'x = 1'],
      errorTags: {
        'x = 3': 'ignored_constant',
        'x = −3': 'wrong_division',
        'x = 1': 'random_guess',
      },
      explanations: {
        correct: 'Correct!',
        'x = 3': 'Subtract 3.',
        'x = −3': 'Divide properly.',
        'x = 1': 'Check equation.',
      },
    },

    {
      id: 'K11_Q10',
      difficulty: 3,
      stem: 'Solve: 4 − 3x = 1',
      correct: 'x = 1',
      options: ['x = 1', 'x = −1', 'x = 3', 'x = −3'],
      errorTags: {
        'x = −1': 'sign_error',
        'x = 3': 'added_instead',
        'x = −3': 'division_error',
      },
      explanations: {
        correct: 'Correct!',
        'x = −1': 'Check signs.',
        'x = 3': 'Subtract correctly.',
        'x = −3': 'Divide properly.',
      },
    },

    {
      id: 'K11_Q11',
      difficulty: 3,
      stem: 'Solve: 2x − 6 = −2',
      correct: 'x = 2',
      options: ['x = 2', 'x = −2', 'x = 4', 'x = −4'],
      errorTags: {
        'x = −2': 'sign_error',
        'x = 4': 'wrong_division',
        'x = −4': 'wrong_steps',
      },
      explanations: {
        correct: 'Correct!',
        'x = −2': 'Check signs.',
        'x = 4': 'Divide correctly.',
        'x = −4': 'Check steps.',
      },
    },

    {
      id: 'K11_Q12',
      difficulty: 3,
      stem: 'Solve: 3x + 6 = 0',
      correct: 'x = −2',
      options: ['x = −2', 'x = 2', 'x = −6', 'x = 6'],
      errorTags: {
        'x = 2': 'sign_error',
        'x = −6': 'skipped_division',
        'x = 6': 'wrong_operation',
      },
      explanations: {
        correct: 'Correct!',
        'x = 2': 'Sign matters.',
        'x = −6': 'Divide by 3.',
        'x = 6': 'Wrong steps.',
      },
    },
  ],

  K12: [
    {
      id: 'K12_Q1',
      difficulty: 1,
      stem: '"Four less than a number is ten." Which equation represents this?',
      correct: 'n − 4 = 10',
      options: ['n − 4 = 10', '4 − n = 10', 'n + 4 = 10', '4n = 10'],
      errorTags: {
        '4 − n = 10': 'less_than_reversal',
        'n + 4 = 10': 'operation_confusion',
        '4n = 10': 'multiplication_confusion',
      },
      explanations: {
        correct: 'Correct!',
        '4 − n = 10': 'Order reversed.',
        'n + 4 = 10': 'Less means subtract.',
        '4n = 10': 'Not multiplication.',
      },
    },
    {
      id: 'K12_Q2',
      difficulty: 2,
      stem: '"Twice a number, increased by 5, equals 19." Solve for the number.',
      correct: '7',
      options: ['7', '12', '9.5', '4.75'],
      errorTags: {
        '12': 'missed_division',
        '9.5': 'order_error',
        '4.75': 'multiple_errors',
      },
      explanations: {
        correct: 'Correct!',
        '12': 'Divide by 2.',
        '9.5': 'Subtract first.',
        '4.75': 'Wrong steps.',
      },
    },
    {
      id: 'K12_Q3',
      difficulty: 2,
      stem: 'A number tripled, minus 7, equals 11. What is the number?',
      correct: '6',
      options: ['6', '3.3', '4', '14/3'],
      errorTags: {
        '3.3': 'divided_first',
        '4': 'arithmetic_error',
        '14/3': 'stopped_early',
      },
      explanations: {
        correct: 'Correct!',
        '3.3': 'Add first.',
        '4': 'Check equation.',
        '14/3': 'Divide further.',
      },
    },
    {
      id: 'K12_Q4',
      difficulty: 3,
      stem: '"A taxi charges ₹40 base plus ₹8 per km. You paid ₹96. How many km did you travel?"',
      correct: '7',
      options: ['7', '17', '12', '6.5'],
      errorTags: {
        '17': 'added_after_dividing',
        '12': 'ignored_base_fee',
        '6.5': 'wrong_calculation',
      },
      explanations: {
        correct: 'Correct!',
        '17': 'Subtract base first.',
        '12': 'Include base fee.',
        '6.5': 'Check math.',
      },
    },

    // NEW QUESTIONS

    {
      id: 'K12_Q5',
      difficulty: 1,
      stem: '"Five more than a number is 12." Which equation matches?',
      correct: 'n + 5 = 12',
      options: ['n + 5 = 12', '5 − n = 12', 'n − 5 = 12', '5n = 12'],
      errorTags: {
        '5 − n = 12': 'order_error',
        'n − 5 = 12': 'operation_confusion',
        '5n = 12': 'multiplication_confusion',
      },
      explanations: {
        correct: 'Correct!',
        '5 − n = 12': 'Wrong order.',
        'n − 5 = 12': 'More means add.',
        '5n = 12': 'Not multiplication.',
      },
    },

    {
      id: 'K12_Q6',
      difficulty: 1,
      stem: '"A number decreased by 3 equals 9." Solve.',
      correct: '12',
      options: ['12', '6', '3', '−6'],
      errorTags: {
        '6': 'subtracted_wrong',
        '3': 'used_constant',
        '−6': 'sign_error',
      },
      explanations: {
        correct: 'Correct!',
        '6': 'Add 3.',
        '3': 'Wrong value.',
        '−6': 'Check signs.',
      },
    },

    {
      id: 'K12_Q7',
      difficulty: 2,
      stem: '"Twice a number minus 4 equals 10." What is the number?',
      correct: '7',
      options: ['7', '3', '5', '14'],
      errorTags: {
        '3': 'subtracted_wrong',
        '5': 'divided_first',
        '14': 'skipped_division',
      },
      explanations: {
        correct: 'Correct!',
        '3': 'Add 4 first.',
        '5': 'Order mistake.',
        '14': 'Divide by 2.',
      },
    },

    {
      id: 'K12_Q8',
      difficulty: 2,
      stem: '"Half a number plus 6 equals 10." Find the number.',
      correct: '8',
      options: ['8', '2', '4', '16'],
      errorTags: {
        '2': 'divided_wrong',
        '4': 'subtracted_wrong',
        '16': 'multiplied_wrong',
      },
      explanations: {
        correct: 'Correct!',
        '2': 'Multiply by 2.',
        '4': 'Subtract first.',
        '16': 'Check steps.',
      },
    },

    {
      id: 'K12_Q9',
      difficulty: 2,
      stem: '"Three more than twice a number is 13." Solve.',
      correct: '5',
      options: ['5', '10', '8', '4'],
      errorTags: {
        '10': 'skipped_division',
        '8': 'wrong_subtraction',
        '4': 'calculation_error',
      },
      explanations: {
        correct: 'Correct!',
        '10': 'Divide by 2.',
        '8': 'Subtract 3.',
        '4': 'Check equation.',
      },
    },

    {
      id: 'K12_Q10',
      difficulty: 3,
      stem: '"A shop adds ₹20 delivery fee and ₹5 per item. Total bill is ₹70. How many items?"',
      correct: '10',
      options: ['10', '14', '50', '8'],
      errorTags: {
        '14': 'ignored_fee',
        '50': 'wrong_operation',
        '8': 'wrong_subtraction',
      },
      explanations: {
        correct: 'Correct!',
        '14': 'Subtract fee first.',
        '50': 'Wrong steps.',
        '8': 'Check math.',
      },
    },

    {
      id: 'K12_Q11',
      difficulty: 3,
      stem: '"A number multiplied by 4, then reduced by 6, equals 10. Find the number."',
      correct: '4',
      options: ['4', '2', '10', '16'],
      errorTags: {
        '2': 'divided_wrong',
        '10': 'ignored_operations',
        '16': 'skipped_subtraction',
      },
      explanations: {
        correct: 'Correct!',
        '2': 'Add 6 first.',
        '10': 'Wrong reasoning.',
        '16': 'Divide properly.',
      },
    },

    {
      id: 'K12_Q12',
      difficulty: 3,
      stem: '"A number divided by 3 plus 2 equals 6. Find the number."',
      correct: '12',
      options: ['12', '2', '18', '6'],
      errorTags: {
        '2': 'divided_wrong',
        '18': 'skipped_subtraction',
        '6': 'used_result',
      },
      explanations: {
        correct: 'Correct!',
        '2': 'Multiply by 3.',
        '18': 'Subtract first.',
        '6': 'Check equation.',
      },
    },
  ],

  // ──────────────────────────────────────────────────
  // K13 — Writing Algebraic Expressions
  // ──────────────────────────────────────────────────
  K13: [
    {
      id: 'K13_Q1',
      difficulty: 1,
      stem: 'Which expression means "a number decreased by 9"?',
      correct: 'n − 9',
      options: ['n − 9', '9 − n', 'n + 9', '9n'],
      errorTags: {
        '9 − n': 'subtraction_reversal',
        'n + 9': 'wrong_operation',
        '9n': 'multiplication_confusion',
      },
      explanations: {
        correct: '"Decreased by 9" means subtract 9 FROM the number. The number (n) comes first: n − 9.',
        '9 − n': '"Decreased by 9" means n − 9, not 9 − n. The number you are reducing comes first.',
        'n + 9': '"Decreased" means subtract (−), not add (+).',
        '9n': '"Decreased by" is subtraction, not multiplication. n − 9 is correct.',
      },
    },
    {
      id: 'K13_Q2',
      difficulty: 1,
      stem: 'Which expression means "twice a number, increased by 5"?',
      correct: '2n + 5',
      options: ['2n + 5', '2(n + 5)', '2n − 5', 'n + 5'],
      errorTags: {
        '2(n + 5)': 'bracket_confusion',
        '2n − 5': 'wrong_sign',
        'n + 5': 'forgot_twice',
      },
      explanations: {
        correct: '"Twice a number" = 2n. "Increased by 5" = + 5. Together: 2n + 5.',
        '2(n + 5)': '2(n+5) = 2n+10 — this means "twice the sum of n and 5", not "twice n, then add 5".',
        '2n − 5': '"Increased by 5" means +5, not −5.',
        'n + 5': '"Twice" means multiply by 2. Don\'t forget the 2: it should be 2n + 5.',
      },
    },
    {
      id: 'K13_Q3',
      difficulty: 2,
      stem: 'Write an expression for: "the product of 4 and a number, decreased by 7".',
      correct: '4n − 7',
      options: ['4n − 7', '7 − 4n', '4(n − 7)', '4n + 7'],
      errorTags: {
        '7 − 4n': 'subtraction_reversal',
        '4(n − 7)': 'bracket_confusion',
        '4n + 7': 'wrong_sign',
      },
      explanations: {
        correct: '"Product of 4 and n" = 4n. "Decreased by 7" = −7. Result: 4n − 7.',
        '7 − 4n': '"Decreased by 7" means subtract 7 FROM 4n, giving 4n − 7, not 7 − 4n.',
        '4(n − 7)': '4(n−7) = 4n−28. This brackets n and 7 together — but only 4n is being decreased.',
        '4n + 7': '"Decreased by 7" means subtract: 4n − 7, not 4n + 7.',
      },
    },
    {
      id: 'K13_Q4',
      difficulty: 2,
      stem: 'Which expression represents "three times the sum of a number and 6"?',
      correct: '3(n + 6)',
      options: ['3(n + 6)', '3n + 6', '3n − 6', 'n + 18'],
      errorTags: {
        '3n + 6': 'missing_bracket',
        '3n − 6': 'wrong_sign_and_bracket',
        'n + 18': 'partial_calculation',
      },
      explanations: {
        correct: '"The sum of n and 6" = (n+6). "Three times" that sum = 3(n+6). The bracket is essential.',
        '3n + 6': '3n+6 means "three times n, then add 6". But the question says "three times the sum", meaning 3×(n+6) = 3n+18.',
        '3n − 6': '"Sum" means addition (+), not subtraction. Also brackets needed: 3(n+6).',
        'n + 18': 'This looks like 3×6=18 was calculated but then only added, not the full expression. Answer: 3(n+6).',
      },
    },
    {
      id: 'K13_Q5',
      difficulty: 1,
      stem: 'Which expression means "a number increased by 7"?',
      correct: 'n + 7',
      options: ['n + 7', 'n − 7', '7n', 'n ÷ 7'],
      errorTags: {
        'n − 7': 'wrong_operation',
        '7n': 'multiplication_confusion',
        'n ÷ 7': 'operation_confusion',
      },
      explanations: {
        correct: '"Increased by 7" means add 7 to the number: n + 7.',
        'n − 7': '"Increased" means to get bigger, which means addition (+). n − 7 would mean "decreased by 7".',
        '7n': '"7n" means 7 multiplied by n, not increased by 7. Use + for "increased by".',
        'n ÷ 7': '"Increased by 7" is addition, not division. The answer is n + 7.',
      },
    },
    {
      id: 'K13_Q6',
      difficulty: 1,
      stem: 'Which expression means "a number divided by 3"?',
      correct: 'n ÷ 3',
      options: ['n ÷ 3', '3n', 'n − 3', 'n + 3'],
      errorTags: {
        '3n': 'multiplication_confusion',
        'n − 3': 'subtraction_confusion',
        'n + 3': 'addition_confusion',
      },
      explanations: {
        correct: '"Divided by 3" means n ÷ 3. Division splits the number into equal parts.',
        '3n': '3n means "3 multiplied by n" (three times the number), not divided. Use ÷ for division.',
        'n − 3': '"Divided by" is division (÷), not subtraction (−). Answer: n ÷ 3.',
        'n + 3': '"Divided by" is division (÷), not addition (+). Answer: n ÷ 3.',
      },
    },
    {
      id: 'K13_Q7',
      difficulty: 1,
      stem: 'Which expression means "four times a number"?',
      correct: '4n',
      options: ['4n', 'n + 4', 'n − 4', 'n ÷ 4'],
      errorTags: {
        'n + 4': 'addition_confusion',
        'n − 4': 'subtraction_confusion',
        'n ÷ 4': 'division_confusion',
      },
      explanations: {
        correct: '"Four times a number" means multiply n by 4: 4n.',
        'n + 4': '"Times" means multiply, not add. 4 times n is written as 4n.',
        'n − 4': '"Times" means multiply (×), not subtract (−). Four times n = 4n.',
        'n ÷ 4': '"Times" means multiply (×), not divide (÷). Four times n = 4n.',
      },
    },
    {
      id: 'K13_Q8',
      difficulty: 2,
      stem: 'Which expression means "five less than twice a number"?',
      correct: '2n − 5',
      options: ['2n − 5', '5 − 2n', '2n + 5', '2(n − 5)'],
      errorTags: {
        '5 − 2n': 'order_reversal',
        '2n + 5': 'wrong_sign',
        '2(n − 5)': 'bracket_confusion',
      },
      explanations: {
        correct: '"Twice a number" = 2n. "Five less than" means subtract 5 FROM 2n: 2n − 5.',
        '5 − 2n': '"Less than" reverses the order: "5 less than 2n" means 2n − 5, not 5 − 2n.',
        '2n + 5': '"Less than" means subtract (−), not add (+). Answer: 2n − 5.',
        '2(n − 5)': '2(n−5) = 2n−10. "Five less than twice n" means 2n first, then subtract 5: 2n−5.',
      },
    },
    {
      id: 'K13_Q9',
      difficulty: 2,
      stem: 'Write an expression for: "three more than the product of 6 and a number".',
      correct: '6n + 3',
      options: ['6n + 3', '6n − 3', '6(n + 3)', '3n + 6'],
      errorTags: {
        '6n − 3': 'wrong_sign',
        '6(n + 3)': 'bracket_confusion',
        '3n + 6': 'swapped_values',
      },
      explanations: {
        correct: '"Product of 6 and n" = 6n. "Three more than" = + 3. Result: 6n + 3.',
        '6n − 3': '"More than" means add (+), not subtract (−). The answer is 6n + 3.',
        '6(n + 3)': '6(n+3) = 6n+18. "Three more than the product" means 6n first, then add 3: 6n+3.',
        '3n + 6': 'The product is "6 and a number" = 6n, and "three more" = +3. Answer: 6n + 3, not 3n + 6.',
      },
    },
    {
      id: 'K13_Q10',
      difficulty: 2,
      stem: 'Which expression represents "the sum of a number and 4, all multiplied by 5"?',
      correct: '5(n + 4)',
      options: ['5(n + 4)', '5n + 4', '5n + 20', 'n + 20'],
      errorTags: {
        '5n + 4': 'missing_bracket',
        '5n + 20': 'expanded_not_simplified',
        'n + 20': 'partial_calculation',
      },
      explanations: {
        correct: '"The sum of n and 4" = (n+4). "All multiplied by 5" wraps the whole sum: 5(n+4).',
        '5n + 4': '5n+4 means "five times n, then add 4". But the question says multiply the WHOLE sum by 5: 5(n+4).',
        '5n + 20': 'This is already expanded: 5(n+4) = 5n+20. The unexpanded form 5(n+4) is the correct answer here.',
        'n + 20': 'This only multiplied 4 by 5. Both n and 4 must be multiplied: 5(n+4).',
      },
    },
    {
      id: 'K13_Q11',
      difficulty: 2,
      stem: 'Write an expression for: "the quotient of a number and 4, increased by 6".',
      correct: 'n ÷ 4 + 6',
      options: ['n ÷ 4 + 6', '(n + 6) ÷ 4', 'n ÷ 10', '4n + 6'],
      errorTags: {
        '(n + 6) ÷ 4': 'wrong_order_of_operations',
        'n ÷ 10': 'combined_values',
        '4n + 6': 'division_becomes_multiplication',
      },
      explanations: {
        correct: '"Quotient of n and 4" = n ÷ 4. "Increased by 6" = + 6. Result: n ÷ 4 + 6.',
        '(n + 6) ÷ 4': 'This adds 6 first, then divides — the wrong order. Divide first: n ÷ 4, then add 6.',
        'n ÷ 10': 'Do not add 4 and 6 together. They perform separate operations: n ÷ 4 + 6.',
        '4n + 6': '"Quotient" means division (÷), not multiplication (×). Answer: n ÷ 4 + 6.',
      },
    },
    {
      id: 'K13_Q12',
      difficulty: 3,
      stem: 'Write an expression for: "three times the difference of a number and 4".',
      correct: '3(n − 4)',
      options: ['3(n − 4)', '3n − 4', '3n − 12', '4 − 3n'],
      errorTags: {
        '3n − 4': 'missing_bracket',
        '3n − 12': 'pre_expanded',
        '4 − 3n': 'order_reversal',
      },
      explanations: {
        correct: '"The difference of n and 4" = (n−4). "Three times" that difference = 3(n−4). Brackets ensure 3 multiplies the whole expression.',
        '3n − 4': 'This means "three times n, then subtract 4". But the question says multiply the WHOLE difference: 3(n−4) = 3n−12.',
        '3n − 12': 'This is the expanded form of 3(n−4). The question asks you to write the expression, so 3(n−4) is preferred.',
        '4 − 3n': '"The difference of n and 4" is n−4 (n comes first). Three times that = 3(n−4).',
      },
    },
    {
      id: 'K13_Q13',
      difficulty: 3,
      stem: 'Which expression represents "twice the sum of a number and 7, decreased by 3"?',
      correct: '2(n + 7) − 3',
      options: ['2(n + 7) − 3', '2n + 7 − 3', '2n + 14 − 3', '2(n + 4)'],
      errorTags: {
        '2n + 7 − 3': 'missing_bracket',
        '2n + 14 − 3': 'partially_expanded',
        '2(n + 4)': 'combined_constants',
      },
      explanations: {
        correct: '"Sum of n and 7" = (n+7). "Twice" that = 2(n+7). "Decreased by 3" = −3. Result: 2(n+7)−3.',
        '2n + 7 − 3': 'Missing the bracket: "twice the sum" means 2×(n+7), not (2×n)+7. Answer: 2(n+7)−3.',
        '2n + 14 − 3': 'This is partially expanded. The unevaluated form 2(n+7)−3 shows the structure clearly.',
        '2(n + 4)': 'Do not combine 7 and −3 inside the bracket. The 7 is inside the sum, the −3 is a separate operation: 2(n+7)−3.',
      },
    },
    {
      id: 'K13_Q14',
      difficulty: 3,
      stem: 'A rectangle has a width of n cm and a length that is 5 more than the width. Write an expression for the perimeter.',
      correct: '4n + 10',
      options: ['4n + 10', '2n + 10', '2n + 5', 'n + 5'],
      errorTags: {
        '2n + 10': 'forgot_two_widths',
        '2n + 5': 'only_one_length',
        'n + 5': 'only_added_dimensions',
      },
      explanations: {
        correct: 'Width = n, Length = n+5. Perimeter = 2×width + 2×length = 2n + 2(n+5) = 2n + 2n + 10 = 4n + 10.',
        '2n + 10': 'You only counted one width. Perimeter uses TWO widths and TWO lengths: 2n + 2(n+5) = 4n+10.',
        '2n + 5': 'The length is (n+5), so 2×length = 2n+10, not 2n+5. Perimeter = 2n + 2n+10 = 4n+10.',
        'n + 5': 'This is just the length expression. Perimeter = 2(width) + 2(length) = 2n + 2(n+5) = 4n+10.',
      },
    },
    {
      id: 'K13_Q15',
      difficulty: 3,
      stem: 'Write an expression for: "eight more than three times the sum of a number and 2".',
      correct: '3(n + 2) + 8',
      options: ['3(n + 2) + 8', '3n + 2 + 8', '3(n + 10)', '3n + 14'],
      errorTags: {
        '3n + 2 + 8': 'missing_bracket',
        '3(n + 10)': 'combined_constants_inside',
        '3n + 14': 'expanded_and_combined',
      },
      explanations: {
        correct: '"Sum of n and 2" = (n+2). "Three times" that = 3(n+2). "Eight more than" = +8. Result: 3(n+2)+8.',
        '3n + 2 + 8': 'Missing the bracket: "three times the sum" means 3×(n+2), not 3n+2. Answer: 3(n+2)+8.',
        '3(n + 10)': 'Do not add 2 and 8 inside the bracket. The 8 is OUTSIDE the sum: 3(n+2)+8.',
        '3n + 14': 'This is the fully simplified form. The structured form 3(n+2)+8 shows the operations more clearly.',
      },
    },
  ],

  // ──────────────────────────────────────────────────
  // K14 — Tables of Values & Patterns
  // ──────────────────────────────────────────────────
  K14: [
    {
      id: 'K14_Q1',
      difficulty: 1,
      stem: 'The expression for a pattern is 3n + 1. What is the value when n = 4?',
      correct: '13',
      options: ['13', '16', '12', '19'],
      errorTags: {
        '16': 'added_n_before_multiplying',
        '12': 'forgot_add_1',
        '19': 'used_wrong_n',
      },
      explanations: {
        correct: '3n+1 when n=4: 3×4 = 12, then 12+1 = 13.',
        '16': 'It looks like 4+1=5 then 3×5=15... Remember: multiply FIRST. 3×4=12, then +1 = 13.',
        '12': '3×4 = 12, but don\'t forget to add the 1: 12+1 = 13.',
        '19': 'Check: n=4, so 3(4)+1 = 12+1 = 13, not 19.',
      },
    },
    {
      id: 'K14_Q2',
      difficulty: 1,
      stem: 'What is the next term in the pattern: 5, 8, 11, 14, __?',
      correct: '17',
      options: ['17', '16', '18', '21'],
      errorTags: {
        '16': 'added_2_not_3',
        '18': 'added_4_not_3',
        '21': 'doubled_difference',
      },
      explanations: {
        correct: 'Each term increases by 3: 5, 8, 11, 14, 17. The common difference is 3.',
        '16': 'The gap is 3 (not 2): 14+3 = 17.',
        '18': 'The gap is 3 (not 4): 14+3 = 17.',
        '21': 'The common difference is 3, not 7. 14+3 = 17.',
      },
    },
    {
      id: 'K14_Q3',
      difficulty: 2,
      stem: 'Find the algebraic rule for the pattern: 3, 7, 11, 15, ... (where n = 1, 2, 3, 4)',
      correct: '4n − 1',
      options: ['4n − 1', '4n + 3', '3n + 4', '4n'],
      errorTags: {
        '4n + 3': 'wrong_constant',
        '3n + 4': 'confused_difference_and_first_term',
        '4n': 'forgot_constant',
      },
      explanations: {
        correct: 'Difference = 4, so rule is 4n + c. When n=1: 4(1)+c = 3 → c = −1. Rule: 4n−1. Check n=2: 4(2)−1=7 ✓',
        '4n + 3': 'When n=1: 4(1)+3=7 ≠ 3. Adjust c: 4(1)+c=3 → c=−1. Rule: 4n−1.',
        '3n + 4': 'The common difference is 4 (not 3), so the n-coefficient is 4. Rule: 4n−1.',
        '4n': 'When n=1: 4(1)=4 ≠ 3. A constant is needed: 4(1)+c=3 → c=−1. Rule: 4n−1.',
      },
    },
    {
      id: 'K14_Q4',
      difficulty: 2,
      stem: 'A pattern follows the rule 5n − 2. What is the 10th term?',
      correct: '48',
      options: ['48', '52', '50', '43'],
      errorTags: {
        '52': 'added_2_instead_of_subtracting',
        '50': 'ignored_constant',
        '43': 'used_n_equals_9',
      },
      explanations: {
        correct: '5n−2 when n=10: 5×10 = 50, then 50−2 = 48.',
        '52': 'The rule is 5n−2, not 5n+2. 5(10)−2 = 50−2 = 48.',
        '50': 'Don\'t forget to subtract 2: 5(10)−2 = 50−2 = 48.',
        '43': 'The 10th term uses n=10 (not n=9): 5(10)−2 = 48.',
      },
    },
    {
      id: 'K14_Q5',
      difficulty: 1,
      stem: 'What is the next term in the pattern: 2, 4, 6, 8, __?',
      correct: '10',
      options: ['10', '9', '12', '16'],
      errorTags: {
        '9': 'added_1_not_2',
        '12': 'added_4_not_2',
        '16': 'doubled_last_term',
      },
      explanations: {
        correct: 'Each term increases by 2: 2, 4, 6, 8, 10. The common difference is 2.',
        '9': 'The gap between terms is 2 (not 1): 8 + 2 = 10.',
        '12': 'The gap is 2 (not 4): 8 + 2 = 10.',
        '16': 'This is doubling, not adding. The pattern adds 2 each time: 8 + 2 = 10.',
      },
    },
    {
      id: 'K14_Q6',
      difficulty: 1,
      stem: 'The rule for a pattern is 2n. What is the value when n = 5?',
      correct: '10',
      options: ['10', '7', '25', '3'],
      errorTags: {
        '7': 'added_instead_of_multiplied',
        '25': 'squared_n',
        '3': 'subtracted_n',
      },
      explanations: {
        correct: '2n when n=5: 2×5 = 10.',
        '7': '2n means 2 multiplied by n, not 2 + n. 2×5 = 10, not 2+5=7.',
        '25': '2n means 2×n, not n×n. 2×5 = 10, not 5×5=25.',
        '3': '2n when n=5 is 2×5=10. There is no subtraction here.',
      },
    },
    {
      id: 'K14_Q7',
      difficulty: 1,
      stem: 'What is the next term in the pattern: 10, 7, 4, 1, __?',
      correct: '−2',
      options: ['−2', '0', '2', '−1'],
      errorTags: {
        '0': 'stopped_at_zero',
        '2': 'reversed_difference',
        '−1': 'subtracted_2_not_3',
      },
      explanations: {
        correct: 'Each term decreases by 3: 10, 7, 4, 1, −2. The common difference is −3.',
        '0': 'The pattern subtracts 3 each time — it goes below zero: 1 − 3 = −2.',
        '2': 'The difference is −3 (subtracting 3), not +3. 1 − 3 = −2.',
        '−1': 'The gap is −3 (not −2): 1 − 3 = −2, not −1.',
      },
    },
    {
      id: 'K14_Q8',
      difficulty: 2,
      stem: 'The rule for a pattern is 2n + 3. What is the value when n = 6?',
      correct: '15',
      options: ['15', '18', '21', '11'],
      errorTags: {
        '18': 'ignored_constant',
        '21': 'added_n_then_multiplied',
        '11': 'used_wrong_n',
      },
      explanations: {
        correct: '2n+3 when n=6: 2×6=12, then 12+3=15.',
        '18': 'Don\'t forget to add 3: 2×6=12, then 12+3=15, not just 12×(something).',
        '21': 'Multiply FIRST (order of operations): 2×6=12, then add 3. Result: 15.',
        '11': 'Check: n=6, so 2(6)+3 = 12+3 = 15, not 11.',
      },
    },
    {
      id: 'K14_Q9',
      difficulty: 2,
      stem: 'Find the algebraic rule for: 2, 5, 8, 11, ... (where n = 1, 2, 3, 4)',
      correct: '3n − 1',
      options: ['3n − 1', '3n + 2', '2n + 3', '3n'],
      errorTags: {
        '3n + 2': 'wrong_constant',
        '2n + 3': 'confused_difference_and_first_term',
        '3n': 'forgot_constant',
      },
      explanations: {
        correct: 'Difference = 3, so rule is 3n + c. When n=1: 3(1)+c=2 → c=−1. Rule: 3n−1. Check n=2: 3(2)−1=5 ✓',
        '3n + 2': 'When n=1: 3(1)+2=5 ≠ 2. Find c: 3(1)+c=2 → c=−1. Rule: 3n−1.',
        '2n + 3': 'The common difference is 3 (not 2), so the coefficient of n is 3. Rule: 3n−1.',
        '3n': 'When n=1: 3(1)=3 ≠ 2. A constant is needed: 3(1)+c=2 → c=−1. Rule: 3n−1.',
      },
    },
    {
      id: 'K14_Q10',
      difficulty: 2,
      stem: 'A pattern follows the rule 4n + 1. What is the 8th term?',
      correct: '33',
      options: ['33', '32', '37', '29'],
      errorTags: {
        '32': 'ignored_constant',
        '37': 'used_n_equals_9',
        '29': 'subtracted_constant',
      },
      explanations: {
        correct: '4n+1 when n=8: 4×8=32, then 32+1=33.',
        '32': 'Don\'t forget to add 1: 4×8=32, then 32+1=33.',
        '37': 'The 8th term uses n=8 (not n=9): 4(8)+1 = 32+1 = 33.',
        '29': 'The rule is 4n+1, not 4n−1. Add 1: 4(8)+1 = 33.',
      },
    },
    {
      id: 'K14_Q11',
      difficulty: 2,
      stem: 'A table shows: n = 1 → 6, n = 2 → 9, n = 3 → 12. What is the rule?',
      correct: '3n + 3',
      options: ['3n + 3', '6n', '3n + 6', '2n + 4'],
      errorTags: {
        '6n': 'used_first_term_as_multiplier',
        '3n + 6': 'wrong_constant',
        '2n + 4': 'wrong_difference',
      },
      explanations: {
        correct: 'Difference = 3 (terms go up by 3), so rule is 3n+c. When n=1: 3(1)+c=6 → c=3. Rule: 3n+3. Check n=2: 6+3=9 ✓',
        '6n': 'When n=2: 6×2=12 ≠ 9. The multiplier is 3 (the common difference). Rule: 3n+3.',
        '3n + 6': 'When n=1: 3(1)+6=9 ≠ 6. Find c: 3(1)+c=6 → c=3. Rule: 3n+3.',
        '2n + 4': 'The terms increase by 3 (not 2), so the n-coefficient is 3. Rule: 3n+3.',
      },
    },
    {
      id: 'K14_Q12',
      difficulty: 3,
      stem: 'Find the algebraic rule for: 5, 11, 17, 23, ... (where n = 1, 2, 3, 4)',
      correct: '6n − 1',
      options: ['6n − 1', '6n + 5', '5n + 6', '6n'],
      errorTags: {
        '6n + 5': 'wrong_constant_sign',
        '5n + 6': 'confused_difference_and_first_term',
        '6n': 'forgot_constant',
      },
      explanations: {
        correct: 'Difference = 6, so rule is 6n+c. When n=1: 6(1)+c=5 → c=−1. Rule: 6n−1. Check n=2: 12−1=11 ✓',
        '6n + 5': 'When n=1: 6(1)+5=11 ≠ 5. Find c: 6(1)+c=5 → c=−1. Rule: 6n−1.',
        '5n + 6': 'The common difference is 6 (not 5), so coefficient of n is 6. Rule: 6n−1.',
        '6n': 'When n=1: 6(1)=6 ≠ 5. A constant offset is needed: 6(1)+c=5 → c=−1. Rule: 6n−1.',
      },
    },
    {
      id: 'K14_Q13',
      difficulty: 3,
      stem: 'A pattern adds 4 each time. The 1st term is 3. What is the 12th term?',
      correct: '47',
      options: ['47', '48', '43', '51'],
      errorTags: {
        '48': 'included_first_term_in_additions',
        '43': 'used_10_steps_not_11',
        '51': 'added_12_differences',
      },
      explanations: {
        correct: 'From term 1 to term 12 there are 11 steps. 3 + (11 × 4) = 3 + 44 = 47.',
        '48': 'From term 1 to term 12 is 11 additions, not 12: 3 + 11×4 = 3+44 = 47.',
        '43': 'From term 1 to term 12 there are 11 steps (not 10): 3 + 11×4 = 47.',
        '51': 'There are only 11 gaps between 12 terms: 3 + 11×4 = 47, not 3+12×4=51.',
      },
    },
    {
      id: 'K14_Q14',
      difficulty: 3,
      stem: 'The nth term of a pattern is 2n + 1. For what value of n does the term equal 19?',
      correct: '9',
      options: ['9', '10', '8', '18'],
      errorTags: {
        '10': 'off_by_one',
        '8': 'subtracted_wrong',
        '18': 'divided_by_wrong_value',
      },
      explanations: {
        correct: 'Set 2n+1=19. Subtract 1: 2n=18. Divide by 2: n=9. Check: 2(9)+1=19 ✓',
        '10': '2(10)+1=21 ≠ 19. Solve properly: 2n+1=19 → 2n=18 → n=9.',
        '8': '2(8)+1=17 ≠ 19. Solve: 2n=18 → n=9.',
        '18': 'Divide 18 by 2 (the coefficient of n), not something else: 2n=18 → n=9.',
      },
    },
    {
      id: 'K14_Q15',
      difficulty: 3,
      stem: 'Pattern A has rule 3n + 2 and Pattern B has rule 5n − 4. For which value of n are they equal?',
      correct: '3',
      options: ['3', '2', '4', '5'],
      errorTags: {
        '2': 'arithmetic_error',
        '4': 'off_by_one',
        '5': 'used_wrong_equation',
      },
      explanations: {
        correct: 'Set equal: 3n+2 = 5n−4. Add 4 to both: 3n+6 = 5n. Subtract 3n: 6 = 2n. n=3. Check: A=11, B=11 ✓',
        '2': 'When n=2: A=3(2)+2=8, B=5(2)−4=6. Not equal. Solve 3n+2=5n−4 → n=3.',
        '4': 'When n=4: A=3(4)+2=14, B=5(4)−4=16. Not equal. Solve 3n+2=5n−4 → n=3.',
        '5': 'When n=5: A=17, B=21. Not equal. Solve 3n+2=5n−4 → 6=2n → n=3.',
      },
    },
  ],

  // ──────────────────────────────────────────────────
  // K15 — The Distributive Property
  // ──────────────────────────────────────────────────
  K15: [
    {
      id: 'K15_Q1',
      difficulty: 1,
      stem: 'Expand: 3(x + 4)',
      correct: '3x + 12',
      options: ['3x + 12', '3x + 4', '3x + 7', 'x + 12'],
      errorTags: {
        '3x + 4': 'only_multiplied_variable',
        '3x + 7': 'added_instead_of_multiplied',
        'x + 12': 'only_multiplied_constant',
      },
      explanations: {
        correct: 'Distribute 3 to BOTH terms: 3×x = 3x and 3×4 = 12. Result: 3x+12.',
        '3x + 4': 'You multiplied x but not 4. Distribute to every term: 3×x=3x AND 3×4=12. Answer: 3x+12.',
        '3x + 7': '3+4=7 is not how distribution works. Multiply: 3×4=12. Result: 3x+12.',
        'x + 12': 'You multiplied 4 but not x. Distribute to every term: 3×x=3x AND 3×4=12. Answer: 3x+12.',
      },
    },
    {
      id: 'K15_Q2',
      difficulty: 1,
      stem: 'Expand: 2(5 − y)',
      correct: '10 − 2y',
      options: ['10 − 2y', '10 − y', '7 − 2y', '10 + 2y'],
      errorTags: {
        '10 − y': 'forgot_to_multiply_y',
        '7 − 2y': 'subtracted_instead_of_multiplied',
        '10 + 2y': 'sign_error',
      },
      explanations: {
        correct: '2×5 = 10 and 2×(−y) = −2y. Result: 10 − 2y.',
        '10 − y': 'Distribute 2 to BOTH terms: 2×5=10 AND 2×y=2y. Result: 10−2y, not 10−y.',
        '7 − 2y': '2×5 = 10 (not 7). Multiply, don\'t subtract: 2×5=10, 2×y=2y. Answer: 10−2y.',
        '10 + 2y': 'Distributing 2 into (5−y): 2×(−y) = −2y, not +2y. Result: 10−2y.',
      },
    },
    {
      id: 'K15_Q3',
      difficulty: 2,
      stem: 'Expand and simplify: 4(x + 3) + 2x',
      correct: '6x + 12',
      options: ['6x + 12', '4x + 14', '6x + 3', '4x + 12'],
      errorTags: {
        '4x + 14': 'added_coefficients_wrong',
        '6x + 3': 'forgot_to_expand_constant',
        '4x + 12': 'forgot_to_collect_like_terms',
      },
      explanations: {
        correct: 'Expand: 4(x+3) = 4x+12. Then: 4x+12+2x = 6x+12.',
        '4x + 14': 'Step 1: 4(x+3) = 4x+12. Step 2: 4x+12+2x = 6x+12. The 4x and 2x combine to 6x.',
        '6x + 3': 'Expand fully: 4×3 = 12, not 3. So 4(x+3)+2x = 4x+12+2x = 6x+12.',
        '4x + 12': 'After expanding: 4x+12+2x. Collect like terms: 4x+2x = 6x. Final: 6x+12.',
      },
    },
    {
      id: 'K15_Q4',
      difficulty: 2,
      stem: 'Expand: 3(2n − 5)',
      correct: '6n − 15',
      options: ['6n − 15', '6n − 5', '6n + 15', '5n − 15'],
      errorTags: {
        '6n − 5': 'only_multiplied_variable_term',
        '6n + 15': 'sign_error_on_constant',
        '5n − 15': 'coefficient_arithmetic_error',
      },
      explanations: {
        correct: '3×2n = 6n and 3×(−5) = −15. Result: 6n−15.',
        '6n − 5': 'Distribute to both terms: 3×2n=6n AND 3×(−5)=−15. Answer: 6n−15.',
        '6n + 15': '3×(−5) = −15, not +15. A positive times a negative gives a negative. Answer: 6n−15.',
        '5n − 15': '3×2n = 6n (not 5n). Multiply the coefficients: 3×2=6. Answer: 6n−15.',
      },
    },
    {
      id: 'K15_Q5',
      difficulty: 1,
      stem: 'Expand: 5(a + 2)',
      correct: '5a + 10',
      options: ['5a + 10', '5a + 2', '5a + 7', 'a + 10'],
      errorTags: {
        '5a + 2': 'only_multiplied_variable',
        '5a + 7': 'added_instead_of_multiplied',
        'a + 10': 'only_multiplied_constant',
      },
      explanations: {
        correct: 'Distribute 5 to BOTH terms: 5×a=5a and 5×2=10. Result: 5a+10.',
        '5a + 2': 'You multiplied a but not 2. Distribute to every term: 5×a=5a AND 5×2=10. Answer: 5a+10.',
        '5a + 7': '5+2=7 is not how distribution works. Multiply: 5×2=10. Result: 5a+10.',
        'a + 10': 'You multiplied 2 but not a. Distribute to every term: 5×a=5a AND 5×2=10. Answer: 5a+10.',
      },
    },
    {
      id: 'K15_Q6',
      difficulty: 1,
      stem: 'Expand: 4(3 − m)',
      correct: '12 − 4m',
      options: ['12 − 4m', '12 − m', '7 − 4m', '12 + 4m'],
      errorTags: {
        '12 − m': 'forgot_to_multiply_variable',
        '7 − 4m': 'subtracted_instead_of_multiplied',
        '12 + 4m': 'sign_error',
      },
      explanations: {
        correct: '4×3=12 and 4×(−m)=−4m. Result: 12−4m.',
        '12 − m': 'Distribute 4 to BOTH terms: 4×3=12 AND 4×m=4m. Result: 12−4m, not 12−m.',
        '7 − 4m': '4×3=12 (not 7). Multiply, don\'t subtract: 4×3=12, 4×m=4m. Answer: 12−4m.',
        '12 + 4m': 'Distributing 4 into (3−m): 4×(−m)=−4m, not +4m. A positive times a negative is negative. Result: 12−4m.',
      },
    },
    {
      id: 'K15_Q7',
      difficulty: 1,
      stem: 'Expand: 2(6 + n)',
      correct: '12 + 2n',
      options: ['12 + 2n', '8 + 2n', '12 + n', '2n + 6'],
      errorTags: {
        '8 + 2n': 'added_instead_of_multiplied',
        '12 + n': 'forgot_to_multiply_variable',
        '2n + 6': 'only_multiplied_variable',
      },
      explanations: {
        correct: '2×6=12 and 2×n=2n. Result: 12+2n.',
        '8 + 2n': '2+6=8 is not correct — you must MULTIPLY: 2×6=12. Result: 12+2n.',
        '12 + n': 'Distribute 2 to BOTH terms: 2×6=12 AND 2×n=2n. Result: 12+2n, not 12+n.',
        '2n + 6': 'Distribute to both: 2×n=2n AND 2×6=12. Result: 2n+12, not 2n+6.',
      },
    },
    {
      id: 'K15_Q8',
      difficulty: 2,
      stem: 'Expand and simplify: 3(x + 2) + 5x',
      correct: '8x + 6',
      options: ['8x + 6', '3x + 11', '8x + 2', '3x + 6'],
      errorTags: {
        '3x + 11': 'added_coefficients_wrong',
        '8x + 2': 'forgot_to_distribute_constant',
        '3x + 6': 'forgot_to_collect_like_terms',
      },
      explanations: {
        correct: 'Expand: 3(x+2)=3x+6. Then: 3x+6+5x = 8x+6.',
        '3x + 11': 'Step 1: 3(x+2)=3x+6. Step 2: 3x+6+5x. Collect x-terms: 3x+5x=8x. Final: 8x+6.',
        '8x + 2': 'Distribute fully: 3×2=6, not 2. So 3(x+2)+5x = 3x+6+5x = 8x+6.',
        '3x + 6': 'After expanding: 3x+6+5x. Don\'t forget to collect like terms: 3x+5x=8x. Final: 8x+6.',
      },
    },
    {
      id: 'K15_Q9',
      difficulty: 2,
      stem: 'Expand and simplify: 2(3n − 4) + n',
      correct: '7n − 8',
      options: ['7n − 8', '6n − 3', '7n − 4', '5n − 8'],
      errorTags: {
        '6n − 3': 'forgot_to_collect_and_wrong_constant',
        '7n − 4': 'wrong_constant_distribution',
        '5n − 8': 'coefficient_arithmetic_error',
      },
      explanations: {
        correct: 'Expand: 2(3n−4)=6n−8. Then: 6n−8+n = 7n−8.',
        '6n − 3': 'Step 1: 2(3n−4)=6n−8. Step 2: 6n−8+n. Collect n-terms: 6n+n=7n. Final: 7n−8.',
        '7n − 4': 'Distribute fully: 2×(−4)=−8, not −4. So 2(3n−4)+n = 6n−8+n = 7n−8.',
        '5n − 8': '2×3n=6n (not 4n). Then 6n+n=7n. Final: 7n−8.',
      },
    },
    {
      id: 'K15_Q10',
      difficulty: 2,
      stem: 'Expand: 6(2x + 3)',
      correct: '12x + 18',
      options: ['12x + 18', '12x + 3', '8x + 9', '12x + 9'],
      errorTags: {
        '12x + 3': 'only_multiplied_variable_term',
        '8x + 9': 'added_instead_of_multiplied',
        '12x + 9': 'arithmetic_error_on_constant',
      },
      explanations: {
        correct: '6×2x=12x and 6×3=18. Result: 12x+18.',
        '12x + 3': 'Distribute to BOTH terms: 6×2x=12x AND 6×3=18. Answer: 12x+18.',
        '8x + 9': '6+2=8 and 6+3=9 — you must MULTIPLY, not add. 6×2x=12x, 6×3=18. Answer: 12x+18.',
        '12x + 9': '6×3=18, not 9. Multiply carefully: 6×3=18. Answer: 12x+18.',
      },
    },
    {
      id: 'K15_Q11',
      difficulty: 2,
      stem: 'Expand and simplify: 5(n + 1) − 2n',
      correct: '3n + 5',
      options: ['3n + 5', '5n + 4', '3n + 1', '7n + 5'],
      errorTags: {
        '5n + 4': 'forgot_to_collect_like_terms',
        '3n + 1': 'forgot_to_distribute_constant',
        '7n + 5': 'added_instead_of_subtracted',
      },
      explanations: {
        correct: 'Expand: 5(n+1)=5n+5. Then: 5n+5−2n = 3n+5.',
        '5n + 4': 'After expanding: 5n+5−2n. Collect like terms: 5n−2n=3n. Final: 3n+5.',
        '3n + 1': 'Distribute fully: 5×1=5, not 1. So 5(n+1)−2n = 5n+5−2n = 3n+5.',
        '7n + 5': 'Subtract 2n (don\'t add): 5n+5−2n = 3n+5, not 7n+5.',
      },
    },
    {
      id: 'K15_Q12',
      difficulty: 3,
      stem: 'Expand and simplify: 3(2x + 4) − 2(x + 1)',
      correct: '4x + 10',
      options: ['4x + 10', '4x + 14', '8x + 10', '4x + 11'],
      errorTags: {
        '4x + 14': 'wrong_constant_in_second_bracket',
        '8x + 10': 'added_x_coefficients_instead_of_subtracting',
        '4x + 11': 'arithmetic_error',
      },
      explanations: {
        correct: 'Expand: 3(2x+4)=6x+12. Expand: 2(x+1)=2x+2. Combine: 6x+12−2x−2 = 4x+10.',
        '4x + 14': 'Second bracket: 2(x+1)=2x+2 (not 2x−2). So 6x+12−2x−2 = 4x+10.',
        '8x + 10': 'Subtract the second expansion: 6x+12 MINUS (2x+2) = 6x−2x+12−2 = 4x+10.',
        '4x + 11': 'Constants: 12−2=10, not 11. So 6x+12−2x−2 = 4x+10.',
      },
    },
    {
      id: 'K15_Q13',
      difficulty: 3,
      stem: 'Expand and simplify: 4(n − 3) + 2(n + 5)',
      correct: '6n − 2',
      options: ['6n − 2', '6n + 2', '6n − 22', '8n − 2'],
      errorTags: {
        '6n + 2': 'sign_error_on_constant',
        '6n − 22': 'wrong_sign_on_second_expansion',
        '8n − 2': 'coefficient_arithmetic_error',
      },
      explanations: {
        correct: 'Expand: 4(n−3)=4n−12. Expand: 2(n+5)=2n+10. Combine: 4n−12+2n+10 = 6n−2.',
        '6n + 2': 'Constants: −12+10=−2, not +2. So 4n−12+2n+10 = 6n−2.',
        '6n − 22': 'Second bracket: 2(n+5)=2n+10 (positive 10). So 4n−12+2n+10 = 6n−2.',
        '8n − 2': 'n-terms: 4n+2n=6n (not 8n). Final: 6n−2.',
      },
    },
    {
      id: 'K15_Q14',
      difficulty: 3,
      stem: 'Simplify: 5(2x − 1) − 3(x + 2)',
      correct: '7x − 11',
      options: ['7x − 11', '7x − 7', '13x − 7', '7x + 11'],
      errorTags: {
        '7x − 7': 'wrong_constant',
        '13x − 7': 'added_coefficients_instead_of_subtracting',
        '7x + 11': 'sign_error_on_final_constant',
      },
      explanations: {
        correct: 'Expand: 5(2x−1)=10x−5. Expand: 3(x+2)=3x+6. Combine: 10x−5−3x−6 = 7x−11.',
        '7x − 7': 'Constants: −5−6=−11, not −7. So 10x−5−3x−6 = 7x−11.',
        '13x − 7': 'Subtract x-terms: 10x−3x=7x (not 10x+3x=13x). Final: 7x−11.',
        '7x + 11': 'Both constants are negative: −5−6=−11. So the answer is 7x−11, not 7x+11.',
      },
    },
    {
      id: 'K15_Q15',
      difficulty: 3,
      stem: 'Simplify: 2(3n + 4) − (n − 2)',
      correct: '5n + 10',
      options: ['5n + 10', '5n + 6', '7n + 6', '5n + 2'],
      errorTags: {
        '5n + 6': 'forgot_negative_distributes_to_minus_2',
        '7n + 6': 'added_n_instead_of_subtracting',
        '5n + 2': 'arithmetic_error_on_constant',
      },
      explanations: {
        correct: 'Expand: 2(3n+4)=6n+8. The −(n−2) means −1×(n−2)=−n+2. Combine: 6n+8−n+2 = 5n+10.',
        '5n + 6': '−(n−2)=−n+2 (not −n−2). A negative outside the bracket flips both signs: −n+2. So 6n+8−n+2 = 5n+10.',
        '7n + 6': 'Subtract n (don\'t add): 6n−n=5n. So 6n+8−n+2 = 5n+10.',
        '5n + 2': 'Constants: 8+2=10 (not 2). The − sign flips −2 to +2: 6n+8−n+2 = 5n+10.',
      },
    },
  ],
};

export default ASSESSMENT_BANK;
