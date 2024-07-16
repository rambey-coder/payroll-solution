import React from "react";
import { Tabs } from "@mantine/core";
import { ITabs } from "./interface";
import styles from './style.module.scss'

export const Tab: React.FC<ITabs> = ({ defaultValue, tabs }) => {
  return (
    <Tabs variant="unstyled" classNames={styles} defaultValue={defaultValue}>
      <Tabs.List className="gap-2">
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.value} value={tab.value}>
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabs.map((tab) => (
        <Tabs.Panel key={tab.value} value={tab.value} className="mt-7">
          {tab.content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

export const DefaultTab: React.FC<ITabs> = ({ defaultValue, tabs }) => {
  return (
    <Tabs color="#6247aa" defaultValue={defaultValue}>
      <Tabs.List className="gap-2">
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.value} value={tab.value}>
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabs.map((tab) => (
        <Tabs.Panel key={tab.value} value={tab.value} className="mt-7">
          {tab.content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

