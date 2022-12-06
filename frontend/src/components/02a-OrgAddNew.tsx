import OrgAddDept from "./02a-OrgAddDept";
import OrgAddTeam from "./02a-OrgAddTeam";
// import OrgAddAssistant from "./02a-OrgAddAssistant";

export default function OrgAddNew(props: any) {

  return (
    <>
      <OrgAddDept setToggleRefresh={props.setToggleRefresh}/>
      <OrgAddTeam />
      {/* <OrgAddAssistant /> */}
    </>
  );
}

