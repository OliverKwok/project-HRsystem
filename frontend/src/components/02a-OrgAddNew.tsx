import OrgAddDept from "./02a-OrgAddDept";
import OrgAddTeam from "./02a-OrgAddTeam";
import OrgAddAssistant from "./02a-OrgAddAssistant";

export default function OrgAddNew() {

  return (
    <>
      <button>Add New Department</button>
      <button>Add New Team</button>
      <button>Add New Assistant</button>

      <OrgAddDept />
      <OrgAddTeam />
      <OrgAddAssistant />
    </>
  );
}
