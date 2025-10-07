import { View, Text, Button } from 'react-native';

function TelaLogin() {
    return (
        <View>
            <Text>Tela de Login</Text>

            <Button
                title="ir para cadastro"
                onPress={() => Navigation.navigate('Cadastro')}
                />

                <Button
                    title="Ir para Descobrir"
                    onPress={() => navigation.navigate('Descobrir')}
                    />
        </View>
    );
};

export default TelaLogin;