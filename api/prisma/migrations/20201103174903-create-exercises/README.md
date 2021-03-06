# Migration `20201103174903-create-exercises`

This migration has been generated by ncucciniello at 11/3/2020, 12:49:03 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Workout" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,

    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE "Exercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workoutId" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "repsAssigned" INTEGER NOT NULL,
    "repsComplete" INTEGER,
    "setsAssigned" INTEGER NOT NULL,
    "setsComplete" INTEGER,
    "exerciseType" INTEGER NOT NULL,

    FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE CASCADE ON UPDATE CASCADE
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201103174335-create-workouts..20201103174903-create-exercises
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -26,4 +26,16 @@
   userId Int
   date   DateTime
   User   User     @relation(fields: [userId], references: [id])
 }
+
+model Exercise {
+  id           Int      @id @default(autoincrement())
+  workoutId    Int
+  weight       Int
+  repsAssigned Int
+  repsComplete Int?
+  setsAssigned Int
+  setsComplete Int?
+  exerciseType Int
+  Workout      Workout  @relation(fields: [workoutId], references: [id])
+}
```


