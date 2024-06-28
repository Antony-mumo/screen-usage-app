import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getUsage } from './usage';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [usageData, setUsageData] = useState(null);

  const fetchUsage = async () => {
    const usage = await getUsage();
    setUsageData(usage);
  };

  useEffect(() => {
    fetchUsage();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Button title="Refresh Usage Data" onPress={fetchUsage} />
        {usageData ? (
          Object.entries(usageData).map(([app, usage]) => (
            <Text key={app}>{`${app}: ${usage} ms`}</Text>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
