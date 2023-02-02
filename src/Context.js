import { createContext } from 'react';

const questionContext = createContext();
const QuestionProvider = questionContext.Provider;
const QuestionConsumer = questionContext.Consumer;

export { QuestionProvider, QuestionConsumer };
