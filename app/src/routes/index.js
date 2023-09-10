import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from '../pages/auth/cadastro';
import Login from '../pages/auth/login';
import Home from '../pages/home';

export default function Routes() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );

}