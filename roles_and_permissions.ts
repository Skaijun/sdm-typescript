const userRoles = ["admin", "editor", "viewer"] as const;
const actions = ["create", "edit", "delete", "view"] as const;

type UserRoleType = (typeof userRoles)[number];
type ActionsType = (typeof actions)[number];

type PermissionsType = {
  [K in UserRoleType]: ActionsType[];
};

const rolePermissions: PermissionsType = {
  admin: ["create", "edit", "delete", "view"],
  editor: ["edit", "view"],
  viewer: ["view"],
};

function hasPermission(role: UserRoleType, action: ActionsType) {
  return rolePermissions[role].includes(action);
}

const canEditorEdit = hasPermission("editor", "edit"); // true
const canViewerDelete = hasPermission("viewer", "delete"); // false
const canUserPlay = hasPermission("editor", "play"); // Error
