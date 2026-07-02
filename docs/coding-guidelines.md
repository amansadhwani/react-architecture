# Coding Guidelines

## Import Convention

Use path aliases (`@`) for imports outside the current feature or module.

| Import Type | Use |
|--------------|-----|
| Same folder | `./` |
| Child folder | `./` |
| Parent folder in the same feature | `../` |
| Different feature | `@/` |
| Shared | `@/` |
| App | `@/` |
| Lib | `@/` |

### ✅ Good

```ts
import UserCard from "./UserCard";
import { useUsers } from "../hooks/useUsers";

import Button from "@/shared/components/Button";
import { apiClient } from "@/lib/axios";
import App from "@/app/App";
```

### ❌ Avoid

```ts
import Button from "../../../../shared/components/Button";
```

Deep relative imports reduce readability and become difficult to maintain when files are moved.