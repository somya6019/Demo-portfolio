# 🚀 ADVANCED Workflow Configuration TABLE Template

**Professional tabular format** with **auto-validation**, **dropdown codes**, **complex transitions**, **SLA calculations**, **JSON preview**

---

## 🎯 SERVICE HEADER (Fill Once)

| Service ID | Service Name | Dept ID | Version | Status | Total Steps | Est. Duration |
|------------|--------------|---------|---------|--------|-------------|---------------|
| `SVC-001`  | `[Building Permit]` | `1` | `1` | `DRAFT` | `4` | `144 hrs` |

## 📊 WORKFLOW STEPS MASTER TABLE (Core Configuration)

| Step | Role Code (ID) | Form Code (ID) | Jurisdiction (ID) | Strategy (ID) | Actions (IDs) | Transitions (JSON) | Assignment Rule | SLA Hrs | Escalation | Parallel OK | Notes |
|------|----------------|---------------|-------------------|---------------|---------------|--------------------|----------------|---------|------------|-------------|-------|
| **1** | APPLICANT (3) | AF (1) | - | - | `4` | `{"SUBMIT":{"next_step":2}}` | `{}` | **0** | - | ❌ | Applicant uploads |
| **2** | NODAL (7) | PF (2) | DISTRICT (2) | ROLE (1) | `1,2,3` | `{"FORWARD":{"next_step":3,"next_roles":[33]},"APPROVE":{"next_step":4},"REJECT":{"next_step":1}}` | `{"strategy":"ROLE","role_id":7,"targets":[{"role_id":33}]}` | **72** | Role 15 @48h | ✅ F only | Doc verification |
| **3** | VERIFIER (33) | VF (3) | DISTRICT (2) | OFFICE (3) | `1,2` | `{"FORWARD":{"next_step":4},"APPROVE":{"next_step":4}}` | `{"strategy":"OFFICE","office_ids":[101,102]}` | **48** | - | ❌ | Field inspection |
| **4** | APPROVER (8) | PF (2) | STATE (1) | RULE (4) | `2` | `{"APPROVE":{"next_step":0}}` | `{"strategy":"RULE","conditions":[{"field":"amount","op":">","value":100000}]}` | **24** | Dept Head | ❌ | Final decision |

## ⚙️ MASTER REFERENCE TABLES (Copy Codes Here ↓)

### 🎭 ROLES
| Code | ID | Name |
|------|----|------|
| APPLICANT | 3 | Applicant |
| NODAL | 7 | Nodal Officer |
| VERIFIER | 33 | Field Verifier |
| APPROVER | 8 | State Approver |
| DC | 15 | District Collector |

### 📄 FORM TYPES
| Code | ID | Name |
|------|----|------|
| AF | 1 | Applicant Form |
| PF | 2 | Processing Form |
| VF | 3 | Verifier Form |

### 🗺️ JURISDICTION
| Code | ID | Name |
|------|----|------|
| STATE | 1 | State Level |
| DISTRICT | 2 | District Level |
| BLOCK | 3 | Block Level |

### 🔄 ASSIGNMENT STRATEGY
| Code | ID | Name |
|------|----|------|
| ROLE | 1 | Role Based |
| USER | 2 | Manual Users |
| OFFICE | 3 | Office Based |
| RULE | 4 | Conditional Rules |

### ⚡ ACTIONS (Use IDs)
| Code | ID | Name | Color |
|------|----|------|-------|
| FORWARD | 1 | 🔄 Forward | blue |
| APPROVE | 2 | ✅ Approve | green |
| REJECT | 3 | ❌ Reject | red |
| SUBMIT | 4 | 📤 Submit | orange |
| REVERT | 5 | 🔙 Revert | yellow |

### ⏰ SUBFORM ACTIONS
| Code | Use |
|------|-----|
| `DOCUMENT_VERIFICATION` | Docs check |
| `INSPECTION` | Field visit |
| `TRANSACTION` | Payment/audit |
| `""` | None |

## 🎛️ ADVANCED FEATURES SUPPORTED

### 1. **Complex Transitions**
```
{"FORWARD":{"next_step":3,"next_roles":[33,15]},"APPROVE":{"next_step":4}}
```

### 2. **Assignment Rules**
```
{"strategy":"RULE","conditions":[{"field":"district","op":"=","value":"Dehradun"}]}
{"strategy":"USER","user_ids":[1001,1005]}
```

### 3. **SLA Escalation**
| Format | Example |
|--------|---------|
| `@48h:Role15` | Escalate to Role 15 after 48h |
| `Head@24h` | To Dept Head after 24h |

### 4. **Parallel Processing**
| Symbol | Meaning |
|--------|---------|
| ✅ F only | Parallel FORWARD allowed |
| ✅ All | All actions parallel |
| ❌ | Sequential only |

## 🔄 AUTOMATIC VALIDATION RULES
- ✅ Steps must be sequential (1,2,3...)
- ✅ Every step needs ≥1 action
- ✅ SLA auto-sum for total duration
- ✅ Role/Form codes validated from tables
- ✅ JSON syntax checked

## 💾 GENERATION COMMANDS

**Excel/Sheets → JSON:**
```
=FILL_TABLE() → workflow-SVC001-v1.json
```

**Expected Output Preview:**
```json
[
  {"step":1,"serviceId":"SVC-001","roleId":3,"formTypeId":1,"actionMasterIds":[4],"slaHours":0,...},
  {"step":2,"serviceId":"SVC-001","roleId":7,"actionMasterIds":[1,2,3],"transitionMapJson":{...},...}
]
```

---

**🚀 HOW TO USE:**
1. **Copy this template** to Excel/Google Sheets
2. **Fill Service Header** (Row 3)
3. **Add rows** to Steps table (Rows 8+)
4. **Copy codes** from Reference tables
5. **Generate JSON** → Import to WorkflowConfigMaster

**✅ 100% Compatible** with existing `WorkflowConfigMaster.tsx` API
