import React from "react";
import { Breadcrumbs } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

interface Props {
  items: crumbVal[];
}

interface crumbVal {
  title: string;
  href: string;
}

export const BreadCrumb: React.FC<Props> = ({ items }) => {
  const crumb =
    items &&
    items.map((item, i) => (
      <Link to={item.href} key={i} style={{ color: "#495057" }}>
        {item.title}
      </Link>
    ));
  return (
    <div>
      <Breadcrumbs
        separator={
          <IconArrowRight className={"icon "} stroke={1.5} color="#9263f8" />
        }
        separatorMargin="sm">
        {crumb}
      </Breadcrumbs>
    </div>
  );
};
