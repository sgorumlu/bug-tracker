import prisma from "@/prisma/client";
import { Table, TableBody, TableCell, TableColumnHeaderCell, TableHeader, TableRow } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusBadge from "../components/IssueStatusBadge";
import IssueActions from "./IssueActions";
import delay from "delay";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000);

  return (
    <div>
      <IssueActions />
      <Table.Root variant="surface">
        <TableHeader>
          <TableRow>
            <TableColumnHeaderCell>Issue</TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">Status</TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">Created</TableColumnHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </TableCell>
              <TableCell className="hidden md:table-cell">{issue.createdAt.toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
