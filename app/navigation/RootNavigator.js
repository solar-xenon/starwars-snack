import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlanetsPage from "../pages/PlanetsPage";
import FilmsPage from "../pages/FilmsPage";
import SpaceshipsPage from "../pages/SpaceshipsPage";

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Planets" component={PlanetsPage} />
      <Tab.Screen name="Films" component={FilmsPage} />
      <Tab.Screen name="Spaceships" component={SpaceshipsPage} />
    </Tab.Navigator>
  );
}
