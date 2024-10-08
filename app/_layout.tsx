import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useThemeColor } from "@/hooks/useThemeColors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Tabs } from "expo-router";

const queryClient = new QueryClient();

export default function RootLayout() {
  const colors = useThemeColor();

  return (
    <QueryClientProvider client={queryClient}>
      < Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.tint,
          headerShown: false
        }}>
        <Tabs.Screen 
          name="index"
          options={{
            title: 'Accueil',
            tabBarIcon: ({ color, focused}) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}/>
        <Tabs.Screen 
          name="products"
          options={{
            title: 'Produits',
            tabBarIcon: ({ color, focused}) => (
              <TabBarIcon name={focused ? 'fish' : 'fish-outline'} color={color} />
            ),
          }}/>
        <Tabs.Screen 
          name="clients"
          options={{
            title: 'Clients',
            tabBarIcon: ({ color, focused}) => (
              <TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} />
            ),
          }}/>
        <Tabs.Screen 
          name="commandes"
          options={{
            title: 'Commandes',
            tabBarIcon: ({ color, focused}) => (
              <TabBarIcon name={focused ? 'basket' : 'basket-outline'} color={color} />
            ),
          }}/>
        <Tabs.Screen 
          name="client/[id]"
          options={{
            href: null,
          }} />
      </Tabs>
    </QueryClientProvider>
  );
}
