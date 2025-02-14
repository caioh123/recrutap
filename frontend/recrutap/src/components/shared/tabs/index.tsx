import React from 'react';
import { TabsContainer, TabList, TabItem, TabContent } from './styles';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <TabsContainer>
      <TabList>
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </TabItem>
        ))}
      </TabList>
      <TabContent>
        {tabs.find(tab => tab.id === activeTab)?.content}
      </TabContent>
    </TabsContainer>
  );
};
