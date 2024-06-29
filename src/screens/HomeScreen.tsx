import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUsage } from '../components/usage';

const HomeScreen = () => {
    const [usageData, setUsageData] = useState(null);

    const fetchUsage = useCallback(async () => {
        const usage = await getUsage();
        setUsageData(usage);
    }, []);

    useEffect(() => {
        fetchUsage();
    }, [fetchUsage]);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button title="Refresh Usage Data" onPress={fetchUsage} />
                {usageData ? (
                    Object.entries(usageData).map(([app, usage]) => (
                        <Text key={app}>{`${app}: ${usage} ms`}</Text>
                    ))
                ) : (
                    <View>
                        <ActivityIndicator size="small" />
                        <Text style={styles.load}>Loading...</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    load: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomeScreen;