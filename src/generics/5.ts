export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }
  
  // Замініть наступний код на версію за допомогою Record
  type RoleDescription = Record<UserRole, string>;

  const userRoleDescription:  RoleDescription = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
  };