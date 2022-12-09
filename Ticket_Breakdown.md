# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Tickets:
- Add the FacilityInternalId field to the Agent entity and update the corresponding table in the database. (Time estimate: 2 hours)

- Modify the getShiftsByFacility function to save in the Agent Entity their facility internal id. (Time estimate: 1 hour)

Assuming that in the metadata there is the facility internal id for the agent, we can take this field, update the corresponding Agent in the db

- Modify the generateReport function to include the facility internal id of the agent. (Time estimate: 1 hour)

When generating the report we have to just switch the value of the id of the Agent with the new field we got from the Facility that we have saved in the Agent Table
