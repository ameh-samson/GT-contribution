import { ThemeProvider } from './ThemeContext';
import { GetRequestProvider } from './GetRequestContext';
import { childrenPropType } from '../types';


const AppProviders = ({ children }: childrenPropType) => {
    return (
        <ThemeProvider>
            <GetRequestProvider>
                {children}
            </GetRequestProvider>
        </ThemeProvider>
    );
};

export default AppProviders;
